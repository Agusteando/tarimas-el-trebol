<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import { solutionPoints } from '../data/services';
</script>

<template>
  <section class="solutions section-pad">
    <div class="container solutions__grid">
      <div data-reveal>
        <SectionHeading
          eyebrow="Soluciones personalizadas"
          title="Suministro de tarimas para necesidades específicas de carga, manejo y almacenamiento"
          description="Adaptamos el suministro a volumen, medida, capacidad, tipo de uso y ritmo operativo de cada empresa."
        />
        <div class="solution-points">
          <span v-for="point in solutionPoints" :key="point">{{ point }}</span>
        </div>
      </div>
      <figure class="solutions__visual" data-reveal>
        <img src="/images/custom-solutions.svg" alt="Tarimas industriales de distintas medidas y capacidades" />
      </figure>
    </div>
  </section>
</template>
