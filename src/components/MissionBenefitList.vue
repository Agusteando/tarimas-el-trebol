<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';
import type { MissionBenefit } from '../data/mission';

defineProps<{
  items: MissionBenefit[];
}>();
</script>

<template>
  <aside class="mission-benefit-panel" aria-label="Ventajas de servicio" data-reveal>
    <article v-for="item in items" :key="item.title" class="mission-benefit-panel__item">
      <span class="mission-benefit-panel__icon" aria-hidden="true">
        <IconSymbol :name="item.icon" />
      </span>
      <span class="mission-benefit-panel__copy">
        <strong>{{ item.title }}</strong>
        <small>{{ item.text }}</small>
      </span>
    </article>
  </aside>
</template>
