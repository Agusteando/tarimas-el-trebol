<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import IconBubble from './IconBubble.vue';
import { featuredProducts } from '../data/products';

const productProofs = [
  {
    icon: 'shield',
    title: 'Calidad garantizada',
    text: 'Procesos de fabricación y revisión que aseguran resistencia y durabilidad.'
  },
  {
    icon: 'delivery-clock',
    title: 'Entregas confiables',
    text: 'Cobertura en todo México con entregas puntuales.'
  },
  {
    icon: 'measure',
    title: 'Soluciones a medida',
    text: 'Fabricamos tarimas según tus medidas y necesidades.'
  },
  {
    icon: 'whatsapp',
    title: 'Asesoría personalizada',
    text: 'Te ayudamos a elegir la mejor opción para tu operación.'
  }
];
</script>

<template>
  <section id="productos" class="products products--showcase" aria-labelledby="products-title">
    <div class="container">
      <div class="products__header" data-reveal>
        <p class="eyebrow eyebrow--clover">Nuestros productos</p>
        <h2 id="products-title">Tarimas para cada necesidad</h2>
        <p class="products__lead">Soluciones resistentes, funcionales y adaptadas a tu operación. Contamos con 8 tipos de producto considerando variantes de primera, segunda y tercera calidad.</p>
      </div>

      <div class="product-grid product-grid--showcase">
        <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
      </div>

      <div class="products-proof" aria-label="Beneficios de nuestros productos" data-reveal>
        <article v-for="proof in productProofs" :key="proof.title" class="products-proof__item">
          <IconBubble :icon="proof.icon" tone="soft" size="lg" />
          <div>
            <strong>{{ proof.title }}</strong>
            <p>{{ proof.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
