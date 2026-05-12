<script setup lang="ts">
import { getWhatsAppLink } from '../data/contact';
</script>

<template>
  <a class="floating-whatsapp" :href="getWhatsAppLink()" target="_blank" rel="noreferrer" aria-label="Cotizar por WhatsApp">
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 3C8.8 3 3 8.6 3 15.6c0 2.5.8 4.8 2.1 6.8L4 29l6.9-1.8A13.4 13.4 0 0 0 16 28c7.2 0 13-5.6 13-12.4S23.2 3 16 3Zm0 22.7c-1.6 0-3.2-.4-4.6-1.1l-.4-.2-4.1 1.1.9-4-.3-.4a10 10 0 0 1-2-5.8c0-5.6 4.7-10.2 10.5-10.2s10.5 4.6 10.5 10.2S21.8 25.7 16 25.7Zm5.8-7.7c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.5 8.5 0 0 1-4.2-3.6c-.3-.5.3-.5.8-1.7.1-.2 0-.4 0-.6l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.8s1.2 3.2 1.3 3.4c.2.2 2.4 3.7 5.9 5.1.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z" />
    </svg>
    <span>Cotizar</span>
  </a>
</template>
