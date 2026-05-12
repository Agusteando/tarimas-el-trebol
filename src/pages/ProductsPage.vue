<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue';
import IconSymbol from '../components/IconSymbol.vue';
import { allProducts } from '../data/products';
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';
import { navigateToHref } from '../composables/useAppRoute';

const quoteMessage = 'Hola, quiero cotizar tarimas industriales. Me interesa revisar el catálogo completo.';

const handleHomeClick = (event: MouseEvent) => {
  event.preventDefault();
  navigateToHref('/#productos');
};
</script>

<template>
  <section class="products-page" aria-labelledby="products-page-title">
    <div class="container products-page__hero">
      <div class="products-page__copy" data-reveal>
        <a class="products-page__back" href="/#productos" @click="handleHomeClick">
          <IconSymbol name="arrow" />
          <span>Volver al inicio</span>
        </a>
        <p class="eyebrow eyebrow--clover">Catálogo de tarimas industriales</p>
        <h1 id="products-page-title">Todas las tarimas para operación industrial</h1>
        <p>
          Elige el tipo de tarima que necesitas y solicita una cotización personalizada por medida,
          uso, volumen, estado y capacidad de carga.
        </p>
        <div class="products-page__actions">
          <a class="button button--accent" :href="getWhatsAppLink(quoteMessage)" target="_blank" rel="noreferrer">
            <IconSymbol name="whatsapp" />
            Cotizar catálogo completo
          </a>
          <a class="button products-page__phone" :href="`tel:+52${contact.phoneCallNumber}`">
            Llamar {{ formatPhone(contact.phoneCallNumber) }}
          </a>
        </div>
      </div>

      <div class="products-page__summary" data-reveal>
        <span>{{ allProducts.length }}</span>
        <strong>tipos de tarima</strong>
        <p>Nuevas, recicladas, estándar y personalizadas para necesidades industriales.</p>
      </div>
    </div>

    <div class="container products-page__catalog">
      <div class="products-page__grid">
        <ProductCard v-for="product in allProducts" :key="product.id" :product="product" />
      </div>

      <div class="products-page__support" data-reveal>
        <div>
          <p class="eyebrow">Cotización personalizada</p>
          <h2>¿No ves la medida exacta que necesitas?</h2>
          <p>
            Podemos revisar medida, capacidad, volumen, aplicación y tiempos de entrega para preparar una opción adecuada para tu operación.
          </p>
        </div>
        <a class="button button--accent" :href="getWhatsAppLink()" target="_blank" rel="noreferrer">
          <IconSymbol name="whatsapp" />
          Enviar datos por WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
