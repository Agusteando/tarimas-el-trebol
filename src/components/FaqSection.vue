<script setup lang="ts">
import { ref } from 'vue';
import IconSymbol from './IconSymbol.vue';
import { contact, getWhatsAppLink } from '../data/contact';
import { faqItems } from '../data/faq';

const openIndex = ref(0);

const toggleItem = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index;
};
</script>

<template>
  <section class="faq-section" aria-labelledby="faq-title">
    <div class="container faq-section__grid">
      <div class="faq-section__content" data-reveal>
        <p class="eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-title">Resolvemos tus dudas antes de que tomes una decisión.</h2>
        <div class="faq-section__line" aria-hidden="true"></div>

        <div class="faq-section__list" role="list">
          <article
            v-for="(item, index) in faqItems"
            :key="item.question"
            class="faq-item"
            :class="{ 'faq-item--open': openIndex === index }"
          >
            <button
              type="button"
              class="faq-item__trigger"
              :aria-expanded="openIndex === index"
              @click="toggleItem(index)"
            >
              <span>{{ item.question }}</span>
              <span class="faq-item__icon" aria-hidden="true">{{ openIndex === index ? '−' : '+' }}</span>
            </button>
            <div v-if="openIndex === index" class="faq-item__panel">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </div>

      <figure class="faq-section__media" data-reveal>
        <img src="/images/faq/faq-warehouse-forklift.webp" alt="Tarimas de madera en bodega con montacargas" loading="lazy" />
      </figure>
    </div>

    <div class="container faq-section__cta" data-reveal>
      <div class="faq-section__cta-copy">
        <span class="faq-section__cta-mark" aria-hidden="true">
          <IconSymbol name="chat" />
        </span>
        <span>
          <strong>¿Tienes otra pregunta?</strong>
          <small>Nuestro equipo está listo para ayudarte.</small>
        </span>
      </div>

      <div class="faq-section__cta-divider" aria-hidden="true"></div>

      <div class="faq-section__cta-actions">
        <a
          class="button button--accent faq-section__button faq-section__button--whatsapp"
          :href="getWhatsAppLink('Hola, tengo una duda sobre sus tarimas industriales.')"
          target="_blank"
          rel="noreferrer"
        >
          <IconSymbol name="whatsapp" />
          <span>Cotizar por WhatsApp</span>
        </a>
        <a class="button faq-section__button faq-section__button--phone" :href="`tel:+52${contact.phoneCallNumber}`">
          <IconSymbol name="phone" />
          <span>Llamar ahora</span>
        </a>
      </div>
    </div>
  </section>
</template>
