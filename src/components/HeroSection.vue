<script setup lang="ts">
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';
</script>

<template>
  <section id="inicio" class="hero section-pad">
    <div class="hero__media" aria-hidden="true">
      <img src="/images/hero-warehouse.svg" alt="" />
    </div>
    <div class="container hero__content" data-reveal>
      <p class="eyebrow">Tarimas y empaques industriales</p>
      <h1>Tarimas industriales para empresas que no pueden detener su operación</h1>
      <p class="hero__lead">
        Venta de tarimas industriales nuevas, recicladas y personalizadas para construcción,
        transporte, industria alimenticia, metalúrgica y operaciones de carga pesada.
      </p>
      <div class="hero__actions">
        <a class="button button--accent" :href="getWhatsAppLink()" target="_blank" rel="noreferrer">
          Solicitar cotización por WhatsApp
        </a>
        <a class="button button--ghost" href="#productos">Ver productos</a>
      </div>
      <div class="hero__contact" aria-label="Datos rápidos de contacto">
        <a :href="`tel:+52${contact.phonePrimary}`">{{ formatPhone(contact.phonePrimary) }}</a>
        <span aria-hidden="true">/</span>
        <a :href="`tel:+52${contact.phoneSecondary}`">{{ formatPhone(contact.phoneSecondary) }}</a>
      </div>
    </div>
  </section>
</template>
