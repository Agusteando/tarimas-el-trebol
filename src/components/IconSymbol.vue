<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <svg class="icon-symbol" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    <g v-if="name === 'shield'">
      <path d="M24 5l15 6v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6Z" />
      <path d="m18 24 4 4 8-9" />
    </g>
    <g v-else-if="name === 'truck'">
      <path d="M6 14h24v17H6V14Zm24 6h7l5 6v5H30V20Z" />
      <path d="M14 36a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm22 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </g>
    <g v-else-if="name === 'leaf'">
      <path d="M39 8C22 9 10 20 10 35c13 2 27-7 29-27Z" />
      <path d="M10 36c6-8 12-13 22-18" />
    </g>
    <g v-else-if="name === 'calendar'">
      <path d="M10 10h28v30H10V10Zm0 9h28M17 6v8m14-8v8" />
      <path d="M17 25h4m6 0h4m-14 7h4m6 0h4" />
    </g>
    <g v-else-if="name === 'measure'">
      <path d="M13 10 38 35l-5 5L8 15l5-5Z" />
      <path d="m16 18 3-3m3 9 3-3m3 9 3-3" />
    </g>
    <g v-else-if="name === 'quote'">
      <path d="M12 8h18l7 7v25H12V8Z" />
      <path d="M29 8v8h8M18 25h12m-12 7h8" />
      <path d="m32 32 3 3 6-8" />
    </g>
    <g v-else>
      <path d="M24 23a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M9 42c2-10 8-15 15-15s13 5 15 15H9Z" />
    </g>
  </svg>
</template>
