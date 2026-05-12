<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import { getWhatsAppLink } from '../data/contact';
</script>

<template>
  <section class="about section-pad">
    <div class="container about__grid">
      <div class="about__copy">
        <SectionHeading
          eyebrow="Quiénes somos"
          title="Proveedor industrial de tarimas para empresas de alto movimiento"
          description="Somos una empresa líder en la venta de tarimas industriales de todas las medidas, fundada en 2018. Nos especializamos en soluciones eficientes y de alta calidad para empresas de diversos sectores."
        />
        <div class="about__kpis" data-reveal>
          <div>
            <strong>2018</strong>
            <span>Empresa fundada</span>
          </div>
          <div>
            <strong>B2B</strong>
            <span>Compras industriales</span>
          </div>
          <div>
            <strong>Medidas</strong>
            <span>Soluciones a necesidad</span>
          </div>
        </div>
        <div class="mission-card" data-reveal>
          <span class="mission-card__label">Nuestra misión</span>
          <p>
            Ser el mejor aliado estratégico para las empresas, proporcionando soluciones de
            tarimas industriales que faciliten y optimicen sus operaciones.
          </p>
        </div>
        <a class="button" :href="getWhatsAppLink('Hola, quiero información sobre tarimas industriales para mi empresa.')" target="_blank" rel="noreferrer">
          Hablar con un asesor
        </a>
      </div>
      <figure class="about__figure" data-reveal>
        <img src="/images/about-stacks.svg" alt="Tarimas industriales apiladas en almacén" />
      </figure>
    </div>
  </section>
</template>
