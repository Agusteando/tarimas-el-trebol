<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import IconSymbol from './IconSymbol.vue';
import { advantages } from '../data/advantages';
</script>

<template>
  <section class="advantages section-pad">
    <div class="container">
      <SectionHeading
        eyebrow="Ventajas competitivas"
        title="Una operación enfocada en calidad, velocidad y atención B2B"
        description="El diseño comercial se centra en las razones que un comprador industrial necesita validar antes de cotizar."
        align="center"
      />
      <div class="advantage-grid">
        <article v-for="advantage in advantages" :key="advantage.title" class="advantage-card" data-reveal>
          <IconSymbol :name="advantage.icon" />
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
