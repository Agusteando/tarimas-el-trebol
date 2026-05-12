<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <svg class="icon-symbol" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    <path v-if="name === 'shield'" d="M24 5l15 6v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6Z" />
    <path v-else-if="name === 'truck'" d="M6 14h24v17H6V14Zm24 6h7l5 6v5H30V20ZM14 36a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm22 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path v-else-if="name === 'leaf'" d="M39 8C22 9 10 20 10 35c13 2 27-7 29-27ZM10 36c6-8 12-13 22-18" />
    <path v-else d="M24 23a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-15 19c2-10 8-15 15-15s13 5 15 15H9Z" />
  </svg>
</template>
