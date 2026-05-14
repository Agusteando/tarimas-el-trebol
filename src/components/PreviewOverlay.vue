<script setup lang="ts">
const isPreview = __APP_PREVIEW__;
</script>

<template>
  <div v-if="isPreview" class="preview-overlay" aria-hidden="true">
    <span>Vista previa</span>
  </div>
</template>
