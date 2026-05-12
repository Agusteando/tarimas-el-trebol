<script setup lang="ts">
import IconBubble from './IconBubble.vue';
import type { IndustryProof } from '../data/industries';

defineProps<{
  items: IndustryProof[];
}>();
</script>

<template>
  <div class="sector-proof-strip" aria-label="Ventajas de atención industrial" data-reveal>
    <article v-for="item in items" :key="item.title" class="sector-proof-strip__item">
      <IconBubble :icon="item.icon" tone="soft" size="lg" />
      <div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </article>
  </div>
</template>
