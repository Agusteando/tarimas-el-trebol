<script setup lang="ts">
import IconBubble from './IconBubble.vue';
import IconSymbol from './IconSymbol.vue';
import { getWhatsAppLink } from '../data/contact';
import { deliveryHighlights, deliverySteps } from '../data/delivery';
</script>

<template>
  <section class="delivery-process" aria-labelledby="delivery-title">
    <div class="delivery-process__hero">
      <div class="delivery-process__copy" data-reveal>
        <p class="eyebrow">Entrega confiable</p>
        <h2 id="delivery-title">Entregamos donde nos necesites, cuando nos necesites.</h2>
        <p class="delivery-process__lead">
          Contamos con rutas propias y alianzas logísticas que nos permiten entregar tarimas en Toluca,
          CDMX y todo México, cumpliendo tiempos y volúmenes acordados.
        </p>

        <ul class="delivery-process__highlights" aria-label="Beneficios de entrega">
          <li v-for="item in deliveryHighlights" :key="item.label">
            <IconBubble :icon="item.icon" tone="soft" size="lg" />
            <strong>{{ item.label }}</strong>
          </li>
        </ul>
      </div>

      <figure class="delivery-process__media" data-reveal>
        <img src="/images/delivery/delivery-truck-pallets.webp" alt="Camión cargado con tarimas de madera para entrega industrial" loading="lazy" />
      </figure>
    </div>

    <div class="delivery-process__workflow">
      <div class="container delivery-process__workflow-grid">
        <div class="delivery-process__workflow-copy" data-reveal>
          <p class="eyebrow">Proceso simple</p>
          <h3>Así es como trabajamos contigo</h3>
          <p>
            Hacemos fácil lo importante. Un proceso claro, rápido y acompañado de nuestro equipo.
          </p>
        </div>

        <ol class="delivery-process__steps" aria-label="Proceso de trabajo">
          <li v-for="(step, index) in deliverySteps" :key="step.title" data-reveal>
            <span class="delivery-process__step-number">{{ index + 1 }}</span>
            <div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="container delivery-process__cta" data-reveal>
        <div class="delivery-process__cta-copy">
          <span class="delivery-process__cta-icon" aria-hidden="true">
            <IconSymbol name="whatsapp" />
          </span>
          <span>
            <strong>¿Listo para obtener tu cotización?</strong>
            <small>Escríbenos por WhatsApp y te respondemos en minutos.</small>
          </span>
        </div>

        <a
          class="button button--accent delivery-process__cta-button"
          :href="getWhatsAppLink('Hola, quiero cotizar tarimas industriales y coordinar una entrega.')"
          target="_blank"
          rel="noreferrer"
        >
          <IconSymbol name="whatsapp" />
          <span>Cotizar por WhatsApp</span>
        </a>
      </div>
    </div>
  </section>
</template>
