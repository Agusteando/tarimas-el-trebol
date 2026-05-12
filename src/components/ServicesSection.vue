<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import { additionalServices } from '../data/services';
import { getWhatsAppLink } from '../data/contact';
</script>

<template>
  <section id="servicios" class="services section-pad">
    <div class="container services__grid">
      <figure class="services__media" data-reveal>
        <img src="/images/service-recycling.svg" alt="Recolección de tarima y chatarra industrial" />
      </figure>
      <div>
        <SectionHeading
          eyebrow="Servicios adicionales"
          title="También recolectamos tarima y chatarra industrial"
          description="Ayudamos a empresas a liberar espacio operativo y gestionar materiales industriales como playo, metal, cartón y otros residuos aprovechables."
        />
        <div class="service-list">
          <article v-for="service in additionalServices" :key="service.title" class="service-item" data-reveal>
            <span aria-hidden="true">{{ service.icon }}</span>
            <div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </article>
        </div>
        <a class="button" :href="getWhatsAppLink('Hola, quiero información sobre recolección de tarima y chatarra industrial.')" target="_blank" rel="noreferrer">
          Solicitar recolección
        </a>
      </div>
    </div>
  </section>
</template>
