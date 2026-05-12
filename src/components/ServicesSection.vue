<script setup lang="ts">
import IconBubble from './IconBubble.vue';
import { additionalServices } from '../data/services';
</script>

<template>
  <section id="servicios" class="additional-services" aria-labelledby="services-title">
    <div class="container additional-services__inner">
      <div class="additional-services__copy" data-reveal>
        <p class="eyebrow eyebrow--light">Servicios adicionales</p>
        <h2 id="services-title">También recolectamos tarima y chatarra industrial</h2>
        <p>Apoyamos a tu operación con soluciones integrales de recolección y manejo responsable.</p>
      </div>

      <div class="additional-services__grid" aria-label="Servicios de recolección">
        <article v-for="service in additionalServices" :key="service.title" class="additional-service-card" data-reveal>
          <IconBubble :icon="service.icon" tone="dark" size="lg" />
          <div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
