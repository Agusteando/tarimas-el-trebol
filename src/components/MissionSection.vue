<script setup lang="ts">
import MissionBenefitList from './MissionBenefitList.vue';
import MissionMediaShape from './MissionMediaShape.vue';
import { missionBenefits } from '../data/mission';
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
        <MissionMediaShape src="/images/hero/pallets-warehouse-stack.webp" alt="Tarimas industriales almacenadas en bodega" />
      </div>

      <MissionBenefitList :items="missionBenefits" />
    </div>
  </section>
</template>
