<script setup lang="ts">
import { ref } from 'vue';
import BrandLogo from './BrandLogo.vue';
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';
import { navigateToHref } from '../composables/useAppRoute';

const isOpen = ref(false);

const navItems = [
  { href: '/#productos', label: 'Productos', hasDropdown: true },
  { href: '/#servicios', label: 'Servicios', hasDropdown: true },
  { href: '/#sectores', label: 'Sectores', hasDropdown: true },
  { href: '/#ventajas', label: 'Ventajas' },
  { href: '/#ubicacion', label: 'Ubicación' }
];

const closeMenu = () => {
  isOpen.value = false;
};

const handleNavClick = (event: MouseEvent, href: string) => {
  event.preventDefault();
  closeMenu();
  navigateToHref(href);
};
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
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
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="{ 'has-chevron': item.hasDropdown }"
          @click="handleNavClick($event, item.href)"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="site-header__actions">
        <a class="site-header__phone" :href="`tel:+52${contact.phonePrimary}`" aria-label="Llamar al teléfono principal">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6.6 10.8c1.5 3 3.8 5.3 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.7 21.4 2.6 13.3 2.6 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-2.2 2.2Z" />
          </svg>
          <span>{{ formatPhone(contact.phonePrimary) }}</span>
        </a>
        <a class="button button--small button--accent site-header__whatsapp" :href="getWhatsAppLink()" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path d="M16 3C8.9 3 3.2 8.7 3.2 15.8c0 2.3.6 4.5 1.8 6.4L3.2 29l7-1.8c1.8 1 3.8 1.5 5.9 1.5 7.1 0 12.8-5.7 12.8-12.8S23.1 3 16 3Zm0 23.5c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1-1.7-1.6-3.6-1.6-5.6C5.4 10 10.1 5.3 16 5.3S26.6 10 26.6 15.9 21.9 26.5 16 26.5Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4Z" />
          </svg>
          <span>Cotizar por WhatsApp</span>
        </a>
      </div>
    </div>
  </header>
</template>
