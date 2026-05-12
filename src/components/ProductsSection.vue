<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import { products } from '../data/products';
import { getWhatsAppLink } from '../data/contact';
</script>

<template>
  <section id="productos" class="products section-pad section-pad--top-heavy">
    <div class="container">
      <SectionHeading
        eyebrow="Nuestros productos"
        title="Tarimas industriales por tipo, medida y condición"
        description="Ofrecemos una amplia gama de tarimas industriales que cumplen con estándares de calidad y seguridad para operación B2B."
        align="center"
      />

      <div class="product-grid">
        <article v-for="product in products" :key="product.id" class="product-card" data-reveal>
          <div class="product-card__image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-card__body">
            <div class="product-card__topline">
              <p v-if="product.measure" class="product-card__measure">{{ product.measure }}</p>
              <p class="product-card__tag">Cotización personalizada</p>
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.summary }}</p>
            <ul>
              <li v-for="variant in product.variants" :key="variant">{{ variant }}</li>
            </ul>
            <a class="button button--full" :href="getWhatsAppLink(product.quoteMessage)" target="_blank" rel="noreferrer">
              Cotizar esta tarima
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
