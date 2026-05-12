<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <div class="product-image-frame">
    <img class="product-image-frame__image" :src="src" :alt="alt" loading="lazy" />
  </div>
</template>
