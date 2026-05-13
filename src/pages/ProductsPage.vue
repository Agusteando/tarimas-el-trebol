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
        <p class="eyebrow eyebrow--clover">Nuestros productos</p>
        <h1 id="products-page-title">Contamos con 8 tipos de producto</h1>
        <p>
          Consulta nuestras variantes de tarima tacón, barrote, tipo cheep e híbrida. Cada producto incluye su descripción y ficha técnica por WhatsApp.
        </p>
        <div class="products-page__actions">
          <a class="button button--accent" :href="getWhatsAppLink(quoteMessage)" target="_blank" rel="noreferrer">
            <IconSymbol name="whatsapp" />
            Solicitar fichas técnicas
          </a>
          <a class="button products-page__phone" :href="`tel:+52${contact.phoneCallNumber}`">
            Llamar {{ formatPhone(contact.phoneCallNumber) }}
          </a>
        </div>
      </div>

      <div class="products-page__summary" data-reveal>
        <span>{{ allProducts.length }}</span>
        <strong>productos</strong>
        <p>Tacón, barrote, tipo cheep e híbrida con variantes nuevas, recicladas y con empalmes.</p>
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
