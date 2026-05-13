<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';
import { getWhatsAppLink } from '../data/contact';

const aboutHighlights = [
  {
    icon: 'person',
    title: 'Atención personalizada',
    text: 'Asesoría experta en cada proyecto.'
  },
  {
    icon: 'shield',
    title: 'Compromiso total',
    text: 'Calidad, cumplimiento y servicio.'
  }
];
</script>

<template>
  <section class="about" aria-labelledby="about-title">
    <div class="container about__grid">
      <figure class="about__media" data-reveal>
        <div class="about__image-card">
          <img src="/images/gallery/gallery-14.webp" alt="Tarimas industriales del cliente almacenadas en bodega" />
        </div>

        <figcaption class="about__float-card">
          <span class="about__float-icon" aria-hidden="true">
            <IconSymbol name="shield" />
          </span>
          <strong>Especialistas en tarimas industriales a la medida</strong>
          <p>Soluciones confiables para empresas que no pueden detener su operación.</p>
        </figcaption>
      </figure>

      <div class="about__copy" data-reveal>
        <p class="eyebrow eyebrow--clover">Quiénes somos</p>
        <h2 id="about-title">Soluciones de tarimas industriales para empresas</h2>

        <div class="about__body">
          <p>
            En El Trébol somos especialistas en la fabricación y suministro de tarimas
            industriales de todas las medidas. Atendemos a empresas de los sectores logístico,
            alimenticio, metalúrgico, automotriz, farmacéutico y más, con soluciones diseñadas
            para optimizar sus procesos y proteger su carga.
          </p>
          <p>
            Combinamos materiales de alta calidad, procesos rigurosos y un equipo experimentado
            para ofrecer tarimas resistentes, funcionales y listas para soportar las exigencias
            de la industria actual.
          </p>
        </div>

        <div class="about__features" aria-label="Diferenciadores de atención">
          <article v-for="item in aboutHighlights" :key="item.title" class="about__feature">
            <span aria-hidden="true">
              <IconSymbol :name="item.icon" />
            </span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>

        <a class="button about__cta" :href="getWhatsAppLink('Hola, quiero información sobre tarimas industriales para mi empresa.')" target="_blank" rel="noreferrer">
          Solicitar asesoría
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>
