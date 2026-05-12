<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <svg class="icon-symbol" viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true" focusable="false">
    <g v-if="name === 'shield'">
      <path d="M24 5l15 6v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6Z" />
      <path d="m18 24 4 4 8-9" />
    </g>
    <g v-else-if="name === 'truck'">
      <path d="M6 15h23v16H6V15Zm23 5h8l5 6v5H29V20Z" />
      <path d="M14 37a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm22 0a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
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
    <g v-else-if="name === 'weight'">
      <path d="M17 17h14l4 23H13l4-23Z" />
      <path d="M19 17a5 5 0 0 1 10 0" />
      <path d="M24 25v7m-4-3.5h8" />
    </g>
    <g v-else-if="name === 'factory'">
      <path d="M8 40V22l9 5v-5l9 5v-9h14v22H8Z" />
      <path d="M14 34h5m5 0h5m5 0h3M31 18v-7h6v7" />
    </g>
    <g v-else-if="name === 'recycle'">
      <path d="m18 11 4-5 4 5" />
      <path d="M22 6v9a8 8 0 0 0-7.2 4.6" />
      <path d="m36 25 3 5-6 1" />
      <path d="M39 30l-8 4.8a8 8 0 0 1-8.2-.2" />
      <path d="m12 30-6-1 3-5" />
      <path d="M6 29l7.8 5a8 8 0 0 0 7.8.3" />
    </g>
    <g v-else-if="name === 'delivery-clock'">
      <path d="M7 14h21v17H7V14Zm21 6h8l5 6v5H28V20Z" />
      <path d="M15 37a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M35 39a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M35 27v5l4 2" />
    </g>
    <g v-else-if="name === 'pallet'">
      <path d="M8 17h32M10 14h28v7H10v-7Z" />
      <path d="M12 21v10m8-10v10m8-10v10m8-10v10" />
      <path d="M8 31h32v5H8v-5Z" />
    </g>
    <g v-else-if="name === 'metal'">
      <path d="M10 35 30 11l8 7-20 24-8-7Z" />
      <path d="m23 20 8 7M15 30l8 7" />
      <path d="M31 11h8v8" />
    </g>
    <g v-else-if="name === 'box'">
      <path d="m24 6 16 9v18l-16 9-16-9V15l16-9Z" />
      <path d="M8 15l16 9 16-9M24 24v18" />
      <path d="m16 10 16 9" />
    </g>
    <g v-else-if="name === 'dots'">
      <path d="M13 24h.1M24 24h.1M35 24h.1" stroke-width="6" />
    </g>
    <g v-else-if="name === 'quote'">
      <path d="M12 8h18l7 7v25H12V8Z" />
      <path d="M29 8v8h8M18 25h12m-12 7h8" />
      <path d="m32 32 3 3 6-8" />
    </g>
    <g v-else-if="name === 'whatsapp'">
      <path d="M12 38.5 14.6 31A16 16 0 1 1 21.2 37.2L12 38.5Z" />
      <path d="M18.6 17.6c.5-1 1-1.1 1.7-.4l2.1 2.4c.5.6.5 1.1.1 1.7l-.7 1c1.4 2.5 3.2 4.3 5.8 5.6l1-.7c.6-.4 1.2-.4 1.7.1l2.4 2.1c.7.7.6 1.3-.3 1.8-1.6.9-3.2 1-5.4.2-4.8-1.7-8.6-5.5-10.3-10.2-.8-2.2-.6-3.9 1.9-3.6Z" />
    </g>
    <g v-else-if="name === 'arrow'">
      <path d="M8 24h30" />
      <path d="m28 14 10 10-10 10" />
    </g>
    <g v-else>
      <path d="M24 23a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M9 42c2-10 8-15 15-15s13 5 15 15H9Z" />
    </g>
  </svg>
</template>
