<script setup lang="ts">
import BrandLogo from './BrandLogo.vue';
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__grid">
      <div>
        <BrandLogo />
        <p>
          {{ contact.legalName }}. Venta de tarimas industriales nuevas, recicladas y personalizadas para compradores B2B.
        </p>
      </div>
      <div>
        <h2>Contacto</h2>
        <a :href="`tel:+52${contact.phoneCallNumber}`">Teléfono: {{ formatPhone(contact.phoneCallNumber) }}</a>
        <a :href="getWhatsAppLink()" target="_blank" rel="noreferrer">WhatsApp: {{ formatPhone(contact.whatsappPhone) }}</a>
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </div>
      <div>
        <h2>Sitio</h2>
        <span>{{ contact.domain }}</span>
        <span>Tarimas y Empaques Industriales</span>
      </div>
    </div>
  </footer>
</template>
