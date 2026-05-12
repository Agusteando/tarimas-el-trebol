<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}>();
</script>

<template>
  <div class="section-heading" :class="{ 'section-heading--center': align === 'center' }" data-reveal>
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="section-heading__description">{{ description }}</p>
  </div>
</template>
