<script setup lang="ts">
import IconBubble from './IconBubble.vue';
import IconSymbol from './IconSymbol.vue';
import { getWhatsAppLink } from '../data/contact';
import { solutionChips, solutionFeatures, solutionProofs } from '../data/services';
</script>

<template>
  <section class="custom-solutions" aria-labelledby="solutions-title">
    <div class="container custom-solutions__grid">
      <div class="custom-solutions__copy" data-reveal>
        <p class="eyebrow">Soluciones a la medida</p>
        <h2 id="solutions-title">Soluciones personalizadas para necesidades específicas de operación industrial</h2>
        <p class="custom-solutions__lead">
          Fabricamos tarimas a la medida para adaptarnos a tus procesos. Definimos medidas,
          capacidades y materiales según el uso, volumen, almacenamiento y transporte de tu operación.
        </p>

        <ul class="custom-solutions__chips" aria-label="Capacidades de personalización">
          <li v-for="chip in solutionChips" :key="chip.label">
            <span class="custom-solutions__chip-icon" aria-hidden="true">
              <IconSymbol :name="chip.icon" />
            </span>
            <span>{{ chip.label }}</span>
          </li>
        </ul>

        <div class="custom-solutions__actions">
          <a
            class="button button--accent custom-solutions__button"
            :href="getWhatsAppLink('Hola, quiero solicitar una cotización para tarimas personalizadas.')"
            target="_blank"
            rel="noreferrer"
          >
            <IconSymbol name="whatsapp" class="custom-solutions__button-icon" />
            <span>Solicitar cotización</span>
          </a>
          <a
            class="button custom-solutions__button custom-solutions__advisor"
            :href="getWhatsAppLink('Hola, quiero hablar con un asesor sobre tarimas industriales.')"
            target="_blank"
            rel="noreferrer"
          >
            <IconSymbol name="person" class="custom-solutions__button-icon" />
            <span>Hablar con un asesor</span>
          </a>
        </div>

        <div class="custom-solutions__proof" aria-label="Beneficios de solución">
          <article v-for="proof in solutionProofs" :key="proof.title">
            <span class="custom-solutions__proof-icon" aria-hidden="true">
              <IconSymbol :name="proof.icon" />
            </span>
            <span>
              <strong>{{ proof.title }}</strong>
              <small>{{ proof.text }}</small>
            </span>
          </article>
        </div>
      </div>

      <figure class="custom-solutions__media" data-reveal>
        <img src="/images/sections/custom-pallet-solutions.webp" alt="Tarimas personalizadas en bodega industrial" loading="lazy" />
        <figcaption class="custom-solutions__feature-card" aria-label="Aplicaciones de tarimas personalizadas">
          <article v-for="feature in solutionFeatures" :key="feature.title">
            <IconBubble :icon="feature.icon" tone="soft" size="md" />
            <span>
              <strong>{{ feature.title }}</strong>
              <small>{{ feature.text }}</small>
            </span>
          </article>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
