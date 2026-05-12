<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';

const missionPoints = [
  'Optimizar operaciones industriales',
  'Facilitar manejo, carga y distribución',
  'Responder con soluciones a la medida'
];
</script>

<template>
  <section class="mission-section" aria-labelledby="mission-title">
    <div class="container mission-section__grid">
      <div class="mission-section__copy" data-reveal>
        <p class="eyebrow eyebrow--clover">Nuestra misión</p>
        <h2 id="mission-title">Impulsar tu operación con tarimas confiables</h2>
        <p>
          Ser el mejor aliado estratégico para las empresas, proporcionando soluciones de
          tarimas industriales que faciliten y optimicen sus operaciones.
        </p>
        <ul class="mission-section__points" aria-label="Objetivos de servicio">
          <li v-for="point in missionPoints" :key="point">
            <IconSymbol name="shield" />
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>

      <div class="mission-section__visual" data-reveal>
        <div class="mission-section__image">
          <img src="/images/hero/pallets-warehouse-stack.webp" alt="Tarimas listas para operación industrial" />
        </div>
        <div class="mission-section__badge">
          <IconSymbol name="leaf" />
          <span>Materiales duraderos y opciones recicladas para tu operación.</span>
        </div>
      </div>
    </div>
  </section>
</template>
