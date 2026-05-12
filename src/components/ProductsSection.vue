<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import IconSymbol from './IconSymbol.vue';
import { featuredProducts } from '../data/products';
import { navigateToHref } from '../composables/useAppRoute';
</script>

<template>
  <section id="productos" class="products products--showcase" aria-labelledby="products-title">
    <div class="container">
      <div class="products__header" data-reveal>
        <p class="eyebrow eyebrow--clover">Nuestros productos</p>
        <h2 id="products-title">Tarimas diseñadas para cada necesidad industrial</h2>
      </div>

      <div class="product-grid product-grid--showcase">
        <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
      </div>

      <div class="products__footer" data-reveal>
        <a class="button products__all-button" href="/productos" @click.prevent="navigateToHref('/productos')">
          <span>Ver todas las tarimas</span>
          <IconSymbol name="arrow" />
        </a>
      </div>
    </div>
  </section>
</template>
