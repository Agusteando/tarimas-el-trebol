<script setup lang="ts">
import { ref } from 'vue';
import BrandLogo from './BrandLogo.vue';
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';

const isOpen = ref(false);

const navItems = [
  { href: '#productos', label: 'Productos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#sectores', label: 'Sectores' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#cotizar', label: 'Cotizar' }
];

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <BrandLogo />

      <button
        class="site-header__menu"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="primary-navigation"
        aria-label="Abrir menú"
        @click="isOpen = !isOpen"
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="primary-navigation" class="site-header__nav" :class="{ 'is-open': isOpen }">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">
          {{ item.label }}
        </a>
      </nav>

      <div class="site-header__actions">
        <a class="site-header__phone" :href="`tel:+52${contact.phonePrimary}`">
          {{ formatPhone(contact.phonePrimary) }}
        </a>
        <a class="button button--small" :href="getWhatsAppLink()" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  </header>
</template>
