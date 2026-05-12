<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';

const trustCards = [
  {
    icon: 'calendar',
    title: 'Desde 2018',
    description: 'Más de 6 años abasteciendo a la industria mexicana.'
  },
  {
    icon: 'truck',
    title: 'Entregas rápidas',
    description: 'Cobertura en Toluca, Edo. Méx. y CDMX.'
  },
  {
    icon: 'measure',
    title: 'Medidas industriales',
    description: 'Tarimas estándar y medidas personalizadas.'
  },
  {
    icon: 'shield',
    title: 'Calidad garantizada',
    description: 'Material resistente y procesos de selección rigurosos.'
  },
  {
    icon: 'quote',
    title: 'Cotización personalizada',
    description: 'Respuesta ágil y soluciones hechas a la medida.'
  }
];
</script>

<template>
  <section class="trust-bar" aria-label="Datos de confianza">
    <div class="trust-bar__grid">
      <article v-for="card in trustCards" :key="card.title" class="trust-bar__item">
        <span class="trust-bar__icon" aria-hidden="true">
          <IconSymbol :name="card.icon" />
        </span>
        <div>
          <h2>{{ card.title }}</h2>
          <p>{{ card.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
