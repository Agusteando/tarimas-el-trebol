<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';

const heroProof = [
  { icon: 'truck', title: 'Entrega rápida' },
  { icon: 'shield', title: 'Calidad garantizada' },
  { icon: 'person', title: 'Atención personalizada' }
];
</script>

<template>
  <section id="inicio" class="hero" aria-labelledby="hero-title">
    <div class="hero__background" aria-hidden="true">
      <img src="/images/hero/green-industrial-pattern.webp" alt="" />
    </div>

    <div class="hero__container" data-reveal>
      <div class="hero__copy">
        <p class="hero__badge">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M8 11h2m4 0h2" />
          </svg>
          Atención B2B
        </p>

        <h1 id="hero-title">
          <span class="hero__line hero__line--white">Tarimas industriales</span>
          <span class="hero__line hero__line--white">para empresas que</span>
          <span class="hero__line hero__line--green">no pueden detener</span>
          <span class="hero__line hero__line--green">su operación</span>
        </h1>

        <div class="hero__accent-line" aria-hidden="true"></div>

        <p class="hero__lead">
          Venta de tarimas industriales nuevas, recicladas y personalizadas para construcción,
          transporte, industria alimenticia, metalúrgica y operaciones de carga pesada.
        </p>

        <div class="hero__actions">
          <a class="button button--accent" :href="getWhatsAppLink()" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="M16 3C8.9 3 3.2 8.7 3.2 15.8c0 2.3.6 4.5 1.8 6.4L3.2 29l7-1.8c1.8 1 3.8 1.5 5.9 1.5 7.1 0 12.8-5.7 12.8-12.8S23.1 3 16 3Zm0 23.5c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1-1.7-1.6-3.6-1.6-5.6C5.4 10 10.1 5.3 16 5.3S26.6 10 26.6 15.9 21.9 26.5 16 26.5Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4Z" />
            </svg>
            Cotizar por WhatsApp
            <span aria-hidden="true">→</span>
          </a>
          <a class="button button--ghost" href="#productos">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 11h16M6 11l2-5h8l2 5M7 11v7h10v-7M9 18v-4h6v4" />
            </svg>
            Ver productos
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div class="hero__contact" aria-label="Datos rápidos de contacto">
          <span>WhatsApp</span>
          <i aria-hidden="true">•</i>
          <a :href="getWhatsAppLink()" target="_blank" rel="noreferrer">{{ formatPhone(contact.whatsappPhone) }}</a>
          <i aria-hidden="true">•</i>
          <span>Teléfono</span>
          <i aria-hidden="true">•</i>
          <a :href="`tel:+52${contact.phoneCallNumber}`">{{ formatPhone(contact.phoneCallNumber) }}</a>
        </div>
      </div>

      <div class="hero__visual" aria-label="Vista de tarimas industriales apiladas en bodega">
        <div class="hero__wood-panel" aria-hidden="true"></div>
        <div class="hero__image-shell">
          <img src="/images/hero/hero-client-pallet-towers.webp" alt="Torres de tarimas de madera del cliente en bodega" />
        </div>

        <div class="hero__proof-card" aria-label="Puntos clave de confianza">
          <div v-for="item in heroProof" :key="item.title" class="hero__proof-item">
            <span>
              <IconSymbol :name="item.icon" />
            </span>
            <strong>{{ item.title }}</strong>
          </div>
        </div>

        <div class="hero__country-card">
          <span aria-hidden="true">☘</span>
          <p>Abastecemos operaciones que mueven a México</p>
        </div>
      </div>
    </div>
  </section>
</template>
