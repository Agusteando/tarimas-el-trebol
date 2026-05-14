<script setup lang="ts">
import { computed } from 'vue';
import { getSpriteIcon } from '../data/iconSprites';

const props = defineProps<{ name: string }>();
const spriteSrc = computed(() => getSpriteIcon(props.name));
const isBrandIcon = computed(() => props.name === 'whatsapp');
</script>

<template>
  <img
    v-if="spriteSrc"
    :class="['icon-symbol', 'icon-symbol--sprite', { 'icon-symbol--brand': isBrandIcon }]"
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
