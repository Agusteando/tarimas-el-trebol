<script setup lang="ts">
import IconBubble from './IconBubble.vue';
import type { Industry } from '../data/industries';

defineProps<{
  industry: Industry;
}>();
</script>

<template>
  <article class="sector-card" :id="industry.id" data-reveal>
    <div class="sector-card__media">
      <img :src="industry.image" :alt="industry.title" loading="lazy" />
    </div>
    <div class="sector-card__body">
      <IconBubble :icon="industry.icon" tone="soft" size="lg" />
      <div class="sector-card__content">
        <h3>{{ industry.title }}</h3>
        <p>{{ industry.description }}</p>
      </div>
    </div>
  </article>
</template>
