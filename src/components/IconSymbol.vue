<script setup lang="ts">
import { computed } from 'vue';
import { getSpriteIcon } from '../data/iconSprites';

const props = defineProps<{ name: string }>();
const spriteSrc = computed(() => getSpriteIcon(props.name));
</script>

<template>
  <img
    v-if="spriteSrc"
    class="icon-symbol icon-symbol--sprite"
    :src="spriteSrc"
    :alt="''"
    aria-hidden="true"
    draggable="false"
  />

  <svg v-else class="icon-symbol" viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true" focusable="false">
    <g v-if="name === 'truck'">
      <path d="M6 15h23v16H6V15Zm23 5h8l5 6v5H29V20Z" />
      <path d="M14 37a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm22 0a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
    </g>
    <g v-else-if="name === 'weight'">
      <path d="M17 17h14l4 23H13l4-23Z" />
      <path d="M19 17a5 5 0 0 1 10 0" />
      <path d="M24 25v7m-4-3.5h8" />
    </g>
    <g v-else-if="name === 'whatsapp'">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        stroke="none"
        d="M24 6.5C14.34 6.5 6.5 14.34 6.5 24c0 3.05.79 5.91 2.17 8.4L7.1 40.9l8.63-1.53A17.35 17.35 0 0 0 24 41.5c9.66 0 17.5-7.84 17.5-17.5S33.66 6.5 24 6.5Zm0 31.8c-2.64 0-5.1-.72-7.22-1.98l-.58-.35-5.16.92.95-5.02-.37-.6A14.17 14.17 0 0 1 9.7 24c0-7.9 6.4-14.3 14.3-14.3S38.3 16.1 38.3 24 31.9 38.3 24 38.3Zm8.08-10.72c-.45-.23-2.64-1.3-3.05-1.45-.41-.15-.71-.23-1.01.23-.3.45-1.16 1.45-1.42 1.75-.26.3-.52.34-.97.11-.45-.23-1.9-.7-3.62-2.23-1.34-1.19-2.24-2.66-2.5-3.11-.26-.45-.03-.7.2-.92.2-.2.45-.52.67-.78.23-.26.3-.45.45-.75.15-.3.08-.56-.04-.78-.11-.23-1.01-2.43-1.38-3.33-.36-.87-.73-.75-1.01-.77h-.86c-.3 0-.78.11-1.19.56-.41.45-1.56 1.53-1.56 3.72 0 2.19 1.6 4.31 1.82 4.61.23.3 3.15 4.8 7.63 6.73 1.07.46 1.9.73 2.55.94 1.07.34 2.05.29 2.82.18.86-.13 2.64-1.08 3.01-2.12.37-1.04.37-1.94.26-2.12-.11-.19-.41-.3-.86-.53Z"
      />
    </g>
    <g v-else-if="name === 'mail'">
      <path d="M8 13h32v24H8V13Z" />
      <path d="m8 15 16 13 16-13" />
    </g>
    <g v-else-if="name === 'building'">
      <path d="M10 40h28V12H10v28Z" />
      <path d="M17 40V29h14v11" />
      <path d="M16 18h4m-4 6h4m8-6h4m-4 6h4" />
      <path d="M7 40h34" />
    </g>
    <g v-else-if="name === 'globe'">
      <path d="M24 42a18 18 0 1 0 0-36 18 18 0 0 0 0 36Z" />
      <path d="M6 24h36" />
      <path d="M24 6c5 5 7.5 11 7.5 18S29 37 24 42c-5-5-7.5-11-7.5-18S19 11 24 6Z" />
      <path d="M10 15h28M10 33h28" />
    </g>
    <g v-else-if="name === 'person'">
      <path d="M24 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M10 42c2-9.5 7-14 14-14s12 4.5 14 14H10Z" />
    </g>
    <g v-else>
      <path d="M24 23a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M9 42c2-10 8-15 15-15s13 5 15 15H9Z" />
    </g>
  </svg>
</template>
