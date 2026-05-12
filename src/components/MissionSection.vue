<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';

const missionItems = [
  {
    icon: 'shield',
    title: 'Calidad garantizada',
    text: 'Procesos estandarizados y materiales seleccionados para máxima resistencia.'
  },
  {
    icon: 'leaf',
    title: 'Compromiso sostenible',
    text: 'Reutilizamos y reciclamos para reducir el impacto ambiental.'
  },
  {
    icon: 'people',
    title: 'Atención personalizada',
    text: 'Asesoría cercana y soluciones a la medida de cada operación.'
  }
];
</script>

<template>
  <section class="mission-section mission-section--reference" aria-labelledby="mission-title">
    <div class="container mission-section__reference-grid">
      <div class="mission-section__reference-copy" data-reveal>
        <p class="eyebrow">Nuestra misión</p>
        <h2 id="mission-title">Soluciones de empaque que impulsan a la industria y cuidan el planeta.</h2>
        <p>
          Fabricamos tarimas industriales de alta calidad, nuevas, recicladas y personalizadas,
          con procesos responsables y materiales sostenibles para garantizar resistencia,
          seguridad y continuidad operativa en cada entrega.
        </p>
      </div>

      <div class="mission-section__reference-media" data-reveal>
        <img src="/images/hero/pallets-warehouse-stack.webp" alt="Tarimas industriales almacenadas en bodega" loading="lazy" />
      </div>

      <aside class="mission-section__reference-panel" aria-label="Ventajas de servicio" data-reveal>
        <article v-for="item in missionItems" :key="item.title" class="mission-section__reference-item">
          <span class="mission-section__reference-icon"><IconSymbol :name="item.icon" /></span>
          <span>
            <strong>{{ item.title }}</strong>
            <small>{{ item.text }}</small>
          </span>
        </article>
      </aside>
    </div>
  </section>
</template>
