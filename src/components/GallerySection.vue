<script setup lang="ts">
const galleryItems = [
  {
    image: '/images/about-stacks.svg',
    title: 'Inventario organizado',
    description: 'Tarimas listas para operación industrial.'
  },
  {
    image: '/images/pallet-barrote.svg',
    title: 'Producto nuevo o reciclado',
    description: 'Opciones según necesidad y presupuesto.'
  },
  {
    image: '/images/delivery-ready.svg',
    title: 'Entrega eficiente',
    description: 'Suministro preparado para empresas.'
  },
  {
    image: '/images/service-recycling.svg',
    title: 'Recolección industrial',
    description: 'Tarima, playo, metal y cartón.'
  }
];
</script>

<template>
  <section class="gallery section-pad">
    <div class="container">
      <div class="gallery__header" data-reveal>
        <p class="eyebrow">Galería operativa</p>
        <h2>Visuales pensados para reemplazarse por fotografía real cuando esté disponible</h2>
      </div>
      <div class="gallery-grid">
        <article v-for="item in galleryItems" :key="item.title" class="gallery-card" data-reveal>
          <img :src="item.image" :alt="item.title" />
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
