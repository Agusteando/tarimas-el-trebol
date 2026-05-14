<script setup lang="ts">
import { getWhatsAppLink } from '../data/contact';
</script>

<template>
  <a class="floating-whatsapp" :href="getWhatsAppLink()" target="_blank" rel="noreferrer" aria-label="Cotizar por WhatsApp">
    <span class="floating-whatsapp__icon-shell" aria-hidden="true">
      <img
        class="floating-whatsapp__icon"
        src="/images/icons/brand/whatsapp-brand-green.png"
        alt=""
        draggable="false"
      />
    </span>
    <span class="floating-whatsapp__label">Cotizar</span>
  </a>
</template>
