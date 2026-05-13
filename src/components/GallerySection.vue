<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';
import { galleryImages } from '../data/gallery';
</script>

<template>
  <section id="galeria" class="work-gallery" aria-labelledby="gallery-title">
    <div class="container">
      <div class="work-gallery__header" data-reveal>
        <div>
          <p class="eyebrow">Galería operativa</p>
          <h2 id="gallery-title">Tarimas reales, procesos reales y capacidad lista para tu operación.</h2>
        </div>
        <p>
          Una mirada al trabajo diario de fabricación, almacenamiento, selección y preparación de tarimas industriales.
        </p>
      </div>

      <div class="work-gallery__grid" aria-label="Galería de tarimas y operación industrial">
        <article
          v-for="image in galleryImages"
          :key="image.src"
          class="work-gallery__card"
          :class="image.variant ? `work-gallery__card--${image.variant}` : undefined"
          data-reveal
        >
          <img :src="image.src" :alt="image.alt" loading="lazy" />
          <div class="work-gallery__overlay">
            <span aria-hidden="true"><IconSymbol name="clover" /></span>
            <div>
              <h3>{{ image.title }}</h3>
              <p>{{ image.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
