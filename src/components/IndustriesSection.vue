<script setup lang="ts">
import IndustryCard from './IndustryCard.vue';
import IndustryProofStrip from './IndustryProofStrip.vue';
import { industries, industryProofs } from '../data/industries';
</script>

<template>
  <section id="sectores" class="sectors-section" aria-labelledby="sectors-title">
    <div class="container sectors-section__container">
      <header class="sectors-section__heading" data-reveal>
        <p class="eyebrow">Sectores que atendemos</p>
        <h2 id="sectors-title">Tarimas para compradores industriales y operaciones de alto movimiento</h2>
        <p>
          En El Trébol atendemos a empresas con necesidades de almacenamiento, transporte,
          carga pesada y operación en múltiples industrias.
        </p>
      </header>

      <div class="sectors-section__grid" aria-label="Sectores atendidos">
        <IndustryCard v-for="industry in industries" :key="industry.id" :industry="industry" />
      </div>

      <IndustryProofStrip :items="industryProofs" />
    </div>
  </section>
</template>
