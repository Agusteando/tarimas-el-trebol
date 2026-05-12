<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';
import type { Product } from '../data/products';
import { getWhatsAppLink } from '../data/contact';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <article class="product-card" data-reveal>
    <div class="product-card__image-frame">
      <img class="product-card__image" :src="product.image" :alt="product.name" loading="lazy" />
    </div>

    <div class="product-card__content">
      <div class="product-card__main">
        <p v-if="product.measure" class="product-card__measure">{{ product.measure }}</p>
        <h3>{{ product.name }}</h3>
        <p>{{ product.summary }}</p>
      </div>

      <ul class="product-card__badges" aria-label="Características principales">
        <li v-for="highlight in product.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
    </div>

    <div class="product-card__actions">
      <a class="button button--accent product-card__quote" :href="getWhatsAppLink(product.quoteMessage)" target="_blank" rel="noreferrer">
        <IconSymbol name="whatsapp" />
        <span>Cotizar por WhatsApp</span>
      </a>
      <a class="button product-card__details" :href="`#${product.id}`" aria-label="Ver detalles de producto">
        Ver detalles
      </a>
    </div>
  </article>
</template>
