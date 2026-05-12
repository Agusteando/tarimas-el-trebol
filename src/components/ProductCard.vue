<script setup lang="ts">
import { computed } from 'vue';
import IconSymbol from './IconSymbol.vue';
import ProductImageFrame from './ProductImageFrame.vue';
import type { Product } from '../data/products';
import { getWhatsAppLink } from '../data/contact';
import { navigateToHref } from '../composables/useAppRoute';

const props = defineProps<{
  product: Product;
  detailsHref?: string;
}>();

const detailHref = computed(() => props.detailsHref ?? `/productos#${props.product.id}`);

const handleDetailsClick = (event: MouseEvent) => {
  event.preventDefault();
  navigateToHref(detailHref.value);
};
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

      <ul class="product-card__badges" aria-label="Características principales">
        <li v-for="highlight in product.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
    </div>

    <div class="product-card__actions">
      <a class="button button--accent product-card__quote" :href="getWhatsAppLink(product.quoteMessage)" target="_blank" rel="noreferrer">
        <IconSymbol name="whatsapp" />
        <span>Cotizar por WhatsApp</span>
      </a>
      <a class="button product-card__details" :href="detailHref" aria-label="Ver detalles de producto" @click="handleDetailsClick">
        Ver detalles
      </a>
    </div>
  </article>
</template>
