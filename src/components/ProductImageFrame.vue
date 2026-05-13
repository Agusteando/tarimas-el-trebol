<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  productId?: string;
}>();
</script>

<template>
  <div class="product-image-frame" :class="productId ? `product-image-frame--${productId}` : undefined">
    <img class="product-image-frame__image" :src="src" :alt="alt" loading="lazy" />
  </div>
</template>
