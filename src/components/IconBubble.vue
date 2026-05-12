<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';

withDefaults(defineProps<{
  icon: string;
  tone?: 'soft' | 'dark' | 'inverted' | 'yellow';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}>(), {
  tone: 'soft',
  size: 'md'
});
</script>

<template>
  <span :class="['icon-bubble', `icon-bubble--${tone}`, `icon-bubble--${size}`]" aria-hidden="true">
    <IconSymbol :name="icon" />
  </span>
</template>
