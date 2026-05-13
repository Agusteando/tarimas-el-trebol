<script setup lang="ts">
import BrandLogo from './BrandLogo.vue';
import IconSymbol from './IconSymbol.vue';
import { contact, formatPhone } from '../data/contact';

const footerColumns = [
  {
    title: 'Productos',
    links: [
      { label: 'Tarimas nuevas', href: '/#productos' },
      { label: 'Tarimas recicladas', href: '/#productos' },
      { label: 'Tarimas personalizadas', href: '/#productos' },
      { label: 'Venta por volumen', href: '/productos' }
    ]
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Recolección de tarimas', href: '/#servicios' },
      { label: 'Reparación y mantenimiento', href: '/#servicios' },
      { label: 'Embalajes y empaques', href: '/#servicios' },
      { label: 'Diseño de soluciones', href: '/#soluciones' }
    ]
  },
  {
    title: 'Sectores',
    links: [
      { label: 'Industrial', href: '/#sectores' },
      { label: 'Alimenticio', href: '/#sectores' },
      { label: 'Construcción', href: '/#sectores' },
      { label: 'Automotriz', href: '/#sectores' },
      { label: 'Todos los sectores', href: '/#sectores' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Quiénes somos', href: '/#quienes-somos' },
      { label: 'Ventajas competitivas', href: '/#ventajas' },
      { label: 'Cobertura', href: '/#ubicacion' },
      { label: 'Contacto', href: '/#ubicacion' }
    ]
  }
];
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__main">
      <div class="site-footer__brand">
        <BrandLogo />
        <p>
          Fabricamos y distribuimos tarimas de madera nuevas, recicladas y personalizadas.
          Soluciones confiables para tu operación.
        </p>
        <div class="site-footer__social" aria-label="Red social de El Trébol">
          <a :href="contact.facebookUrl" target="_blank" rel="noreferrer" aria-label="Facebook de El Trébol">f</a>
        </div>
      </div>

      <nav class="site-footer__columns" aria-label="Enlaces del sitio">
        <section v-for="column in footerColumns" :key="column.title" class="site-footer__column">
          <h2>{{ column.title }}</h2>
          <a v-for="link in column.links" :key="link.label" :href="link.href">{{ link.label }}</a>
        </section>
      </nav>

      <div class="site-footer__contact">
        <h2>Contacto</h2>
        <a :href="`tel:+52${contact.phoneCallNumber}`">
          <IconSymbol name="phone" />
          <span>{{ formatPhone(contact.phoneCallNumber) }}</span>
        </a>
        <a :href="`mailto:${contact.email}`">
          <IconSymbol name="mail" />
          <span>{{ contact.email }}</span>
        </a>
        <span>
          <IconSymbol name="pin" />
          <span>{{ contact.addressLine1 }}<br />{{ contact.addressLine2 }}</span>
        </span>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="container site-footer__bottom-inner">
        <span>© 2025 El Trébol Tarimas y Empaques Industriales. Todos los derechos reservados.</span>
        <span class="site-footer__legal">
          <a href="/aviso-de-privacidad">Aviso de privacidad</a>
          <span aria-hidden="true">|</span>
          <a href="/terminos-y-condiciones">Términos y condiciones</a>
        </span>
      </div>
    </div>
  </footer>
</template>
