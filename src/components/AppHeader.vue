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
        <a class="site-header__phone" :href="`tel:+52${contact.phoneCallNumber}`" aria-label="Llamar al teléfono principal">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6.6 10.8c1.5 3 3.8 5.3 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.7 21.4 2.6 13.3 2.6 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-2.2 2.2Z" />
          </svg>
          <span>{{ formatPhone(contact.phoneCallNumber) }}</span>
        </a>
        <a class="button button--small button--accent site-header__whatsapp" :href="getWhatsAppLink()" target="_blank" rel="noreferrer">
          <img
            class="site-header__whatsapp-icon"
            src="/images/icons/brand/whatsapp-brand-dark.png"
            alt=""
            aria-hidden="true"
            draggable="false"
          />
          <span>Cotizar por WhatsApp</span>
        </a>
      </div>
    </div>
  </header>
</template>
