<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import { industries } from '../data/industries';
</script>

<template>
  <section id="sectores" class="industries section-pad">
    <div class="container">
      <SectionHeading
        eyebrow="Sectores que atendemos"
        title="Tarimas para compradores industriales y operaciones de alto volumen"
        description="Servimos a una amplia variedad de industrias que requieren tarimas resistentes, seguras y listas para operación."
        align="center"
      />
      <div class="industry-track" aria-label="Sectores atendidos">
        <article v-for="industry in industries" :key="industry.id" class="industry-card" data-reveal>
          <img :src="industry.image" :alt="industry.title" />
          <div class="industry-card__overlay">
            <h3>{{ industry.title }}</h3>
            <p>{{ industry.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
