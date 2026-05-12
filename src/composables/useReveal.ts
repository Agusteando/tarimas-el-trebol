import { onMounted, onUnmounted } from 'vue';

export function useReveal() {
  let observer: IntersectionObserver | null = null;
  let mutationObserver: MutationObserver | null = null;
  const observedElements = new WeakSet<Element>();

  const observeRevealElements = () => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    elements.forEach((element) => {
      if (!observedElements.has(element) && !element.classList.contains('is-visible')) {
        observedElements.add(element);
        observer?.observe(element);
      }
    });
  };

  onMounted(() => {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
      );
    }

    observeRevealElements();

    mutationObserver = new MutationObserver(() => observeRevealElements());
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  });

  onUnmounted(() => {
    observer?.disconnect();
    mutationObserver?.disconnect();
  });
}
