<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';
import ProductImageFrame from './ProductImageFrame.vue';
import type { Product } from '../data/products';
import { getWhatsAppLink } from '../data/contact';

defineProps<{
  product: Product;
  detailsHref?: string;
}>();
</script>

<template>
  <article :id="product.id" class="product-card" data-reveal>
    <ProductImageFrame :src="product.image" :alt="product.name" />

    <div class="product-card__content">
      <div class="product-card__main">
        <p v-if="product.measure" class="product-card__measure">{{ product.measure }}</p>
        <h3>{{ product.name }}</h3>
        <p>{{ product.summary }}</p>
      </div>

      <div v-if="product.qualities?.length" class="product-card__qualities" aria-label="Calidades disponibles">
        <article v-for="quality in product.qualities" :key="quality.title" class="product-card__quality">
          <strong>{{ quality.title }}</strong>
          <p>{{ quality.description }}</p>
        </article>
      </div>

      <ul v-else class="product-card__badges" aria-label="Características principales">
        <li v-for="highlight in product.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
    </div>

    <div class="product-card__actions product-card__actions--single">
      <a class="button button--accent product-card__sheet" :href="getWhatsAppLink(product.sheetMessage)" target="_blank" rel="noreferrer">
        <IconSymbol name="whatsapp" />
        <span>Ficha técnica</span>
      </a>
    </div>
  </article>
</template>
