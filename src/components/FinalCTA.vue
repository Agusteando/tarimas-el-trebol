<script setup lang="ts">
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';
</script>

<template>
  <section id="cotizar" class="final-cta section-pad">
    <div class="container final-cta__card" data-reveal>
      <div>
        <p class="eyebrow eyebrow--light">¿Listo para cotizar?</p>
        <h2>Cotiza tarimas industriales para tu empresa</h2>
        <p>
          Recibe atención personalizada y precios de acuerdo con tus necesidades, volumen y tipo de tarima.
        </p>
      </div>
      <div class="final-cta__actions">
        <a class="button button--accent" :href="getWhatsAppLink()" target="_blank" rel="noreferrer">
          Cotizar por WhatsApp
        </a>
        <a class="button button--ghost-dark" :href="`tel:+52${contact.phoneCallNumber}`">
          Llamar {{ formatPhone(contact.phoneCallNumber) }}
        </a>
        <a class="final-cta__email" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </div>
    </div>
  </section>
</template>
