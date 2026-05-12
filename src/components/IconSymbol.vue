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
    <g v-else-if="name === 'phone'">
      <path d="M17 8 12 13c-.8.8-1.1 2-.7 3.1 3 9 9.6 15.6 18.6 18.6 1.1.4 2.3.1 3.1-.7l5-5c.8-.8.8-2.1 0-2.9l-5.1-5.1c-.8-.8-2-.8-2.8-.1l-2.2 1.9c-3.3-1.7-5.9-4.3-7.6-7.6l1.9-2.2c.7-.8.7-2-.1-2.8L20 8c-.8-.8-2.1-.8-3 0Z" />
    </g>
    <g v-else-if="name === 'pin'">
      <path d="M24 43s13-12.1 13-24A13 13 0 0 0 11 19c0 11.9 13 24 13 24Z" />
      <path d="M24 24.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
    </g>
    <g v-else-if="name === 'clock'">
      <path d="M24 42a18 18 0 1 0 0-36 18 18 0 0 0 0 36Z" />
      <path d="M24 14v11l7 4" />
    </g>
    <g v-else-if="name === 'award'">
      <path d="M24 28a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
      <path d="m18 27-2 14 8-5 8 5-2-14" />
      <path d="m20 18 3 3 6-7" />
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

    <g v-else-if="name === 'food'">
      <path d="M14 6v16" />
      <path d="M8 6v8c0 4 2.7 7 6 7s6-3 6-7V6" />
      <path d="M14 21v21" />
      <path d="M32 6c4 4 6 9 6 15 0 5-2.4 8-6 8h-3V6h3Z" />
      <path d="M32 29v13" />
    </g>
    <g v-else-if="name === 'shovel'">
      <path d="m14 35 19-19" />
      <path d="m29 12 7-7 7 7-7 7-7-7Z" />
      <path d="m10 39 4-4 6 6-4 4a4.2 4.2 0 0 1-6-6Z" />
      <path d="m22 27 5 5" />
    </g>
    <g v-else-if="name === 'ship'">
      <path d="M10 26h28l-4 11H14l-4-11Z" />
      <path d="M17 26V12h14v14" />
      <path d="M14 18h20" />
      <path d="M7 38c3 2 6 2 9 0s6-2 9 0 6 2 9 0 5-2 7 0" />
      <path d="M24 7v5" />
    </g>
    <g v-else-if="name === 'users'">
      <path d="M19 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path d="M7 40c1.7-8 6-12 12-12s10.3 4 12 12H7Z" />
      <path d="M32 23a5.5 5.5 0 1 0 0-11" />
      <path d="M31 29c4.6.6 7.8 4.4 9 11" />
    </g>
    <g v-else-if="name === 'gear'">
      <path d="M24 30a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="M24 6v6m0 24v6M6 24h6m24 0h6" />
      <path d="m11.3 11.3 4.2 4.2m17 17 4.2 4.2m0-25.4-4.2 4.2m-17 17-4.2 4.2" />
      <path d="M18 8.5 16 13m16 22-2-4.5M8.5 30l4.5-2M35 16l4.5 2" />
    </g>
    <g v-else-if="name === 'clover'">
      <path d="M23 22c-6-9-14-7-14-1 0 5 7 6 14 1Z" />
      <path d="M25 22c6-9 14-7 14-1 0 5-7 6-14 1Z" />
      <path d="M23 26c-6 9-14 7-14 1 0-5 7-6 14-1Z" />
      <path d="M25 26c6 9 14 7 14 1 0-5-7-6-14-1Z" />
      <path d="M24 26v16" />
    </g>
    <g v-else-if="name === 'quote'">
      <path d="M12 8h18l7 7v25H12V8Z" />
      <path d="M29 8v8h8M18 25h12m-12 7h8" />
      <path d="m32 32 3 3 6-8" />
    </g>
    <g v-else-if="name === 'chat'">
      <path d="M10 12h28a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H21l-8 6v-6h-3a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z" />
      <path d="M16 21h16M16 28h10" />
    </g>
    <g v-else-if="name === 'whatsapp'">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        stroke="none"
        d="M24 6.5C14.34 6.5 6.5 14.34 6.5 24c0 3.05.79 5.91 2.17 8.4L7.1 40.9l8.63-1.53A17.35 17.35 0 0 0 24 41.5c9.66 0 17.5-7.84 17.5-17.5S33.66 6.5 24 6.5Zm0 31.8c-2.64 0-5.1-.72-7.22-1.98l-.58-.35-5.16.92.95-5.02-.37-.6A14.17 14.17 0 0 1 9.7 24c0-7.9 6.4-14.3 14.3-14.3S38.3 16.1 38.3 24 31.9 38.3 24 38.3Zm8.08-10.72c-.45-.23-2.64-1.3-3.05-1.45-.41-.15-.71-.23-1.01.23-.3.45-1.16 1.45-1.42 1.75-.26.3-.52.34-.97.11-.45-.23-1.9-.7-3.62-2.23-1.34-1.19-2.24-2.66-2.5-3.11-.26-.45-.03-.7.2-.92.2-.2.45-.52.67-.78.23-.26.3-.45.45-.75.15-.3.08-.56-.04-.78-.11-.23-1.01-2.43-1.38-3.33-.36-.87-.73-.75-1.01-.77h-.86c-.3 0-.78.11-1.19.56-.41.45-1.56 1.53-1.56 3.72 0 2.19 1.6 4.31 1.82 4.61.23.3 3.15 4.8 7.63 6.73 1.07.46 1.9.73 2.55.94 1.07.34 2.05.29 2.82.18.86-.13 2.64-1.08 3.01-2.12.37-1.04.37-1.94.26-2.12-.11-.19-.41-.3-.86-.53Z"
      />
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
