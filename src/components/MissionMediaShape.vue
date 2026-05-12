<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <svg class="mission-media-shape" viewBox="0 0 520 428" role="img" :aria-label="alt" preserveAspectRatio="none">
    <defs>
      <clipPath id="mission-media-curve" clipPathUnits="objectBoundingBox">
        <path d="M0.23 0 H1 V1 H0.15 C0.03 0.84 0.03 0.61 0.11 0.43 C0.17 0.29 0.19 0.13 0.23 0 Z" />
      </clipPath>
    </defs>
    <image :href="src" width="520" height="428" preserveAspectRatio="xMidYMid slice" clip-path="url(#mission-media-curve)" />
  </svg>
</template>
