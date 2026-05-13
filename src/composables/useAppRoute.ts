import { nextTick, onMounted, onUnmounted, readonly, ref } from 'vue';

const currentPath = ref(normalizePath(window.location.pathname));

function normalizePath(path: string) {
  const normalized = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  const appPaths = new Set(['/productos', '/aviso-de-privacidad', '/terminos-y-condiciones']);

  if (appPaths.has(normalized)) {
    return normalized;
  }

  return '/';
}

function scrollToHash(hash: string) {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const target = document.querySelector(hash);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function navigateToHref(href: string) {
  const target = new URL(href, window.location.origin);
  const path = normalizePath(target.pathname);
  const nextUrl = `${path}${target.hash}`;

  if (`${window.location.pathname}${window.location.hash}` !== nextUrl) {
    window.history.pushState({}, '', nextUrl);
  }

  currentPath.value = path;

  void nextTick(() => {
    window.requestAnimationFrame(() => scrollToHash(target.hash));
  });
}

export function useAppRoute() {
  const syncRoute = () => {
    currentPath.value = normalizePath(window.location.pathname);

    void nextTick(() => {
      if (window.location.hash) {
        window.requestAnimationFrame(() => scrollToHash(window.location.hash));
      }
    });
  };

  onMounted(() => {
    syncRoute();
    window.addEventListener('popstate', syncRoute);
  });

  onUnmounted(() => {
    window.removeEventListener('popstate', syncRoute);
  });

  return {
    currentPath: readonly(currentPath),
    navigateToHref
  };
}
