<script setup lang="ts">
import IconBubble from './IconBubble.vue';
import IconSymbol from './IconSymbol.vue';
import { contact, getWhatsAppLink } from '../data/contact';
import { advantages } from '../data/advantages';
</script>

<template>
  <section id="ventajas" class="advantages-section" aria-labelledby="advantages-title">
    <div class="container">
      <div class="advantages-section__heading" data-reveal>
        <p class="eyebrow">Ventajas competitivas</p>
        <h2 id="advantages-title">Más que tarimas, soluciones que impulsan tu operación.</h2>
        <div class="advantages-section__line" aria-hidden="true"></div>
        <p class="advantages-section__lead">
          Nos diferenciamos por la calidad de nuestros productos, la atención personalizada y el compromiso real con cada cliente.
        </p>
      </div>

      <div class="advantages-section__grid" role="list">
        <article
          v-for="(advantage, index) in advantages"
          :key="advantage.title"
          class="advantages-section__item"
          :class="{ 'advantages-section__item--last': index === advantages.length - 1 }"
          data-reveal
        >
          <IconBubble :icon="advantage.icon" tone="soft" size="xl" />
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
        </article>
      </div>

      <div class="advantages-section__cta" data-reveal>
        <div class="advantages-section__cta-main">
          <span class="advantages-section__cta-mark" aria-hidden="true">
            <IconSymbol name="handshake" />
          </span>
          <div>
            <h3>Construimos relaciones de largo plazo.</h3>
            <p>Tu éxito es parte de nuestro compromiso.</p>
          </div>
        </div>

        <div class="advantages-section__cta-divider" aria-hidden="true"></div>

        <div class="advantages-section__cta-actions-wrap">
          <p>Hablemos de tu proyecto y descubre cómo podemos ayudarte.</p>
          <div class="advantages-section__cta-actions">
            <a
              class="button button--accent advantages-section__button advantages-section__button--whatsapp"
              :href="getWhatsAppLink('Hola, quiero cotizar tarimas industriales para mi operación.')"
              target="_blank"
              rel="noreferrer"
            >
              <IconSymbol name="whatsapp" />
              <span>Cotizar por WhatsApp</span>
            </a>
            <a class="button advantages-section__button advantages-section__button--phone" :href="`tel:+52${contact.phoneCallNumber}`">
              <IconSymbol name="phone" />
              <span>Llamar ahora</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
