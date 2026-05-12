<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import { getWhatsAppLink } from '../data/contact';

const steps = [
  {
    title: 'Dinos qué tarima necesitas',
    description: 'Tipo de tarima, volumen aproximado y uso principal.'
  },
  {
    title: 'Revisamos medida y operación',
    description: 'Validamos condición, capacidad y necesidades de entrega.'
  },
  {
    title: 'Te enviamos cotización personalizada',
    description: 'Precios de acuerdo con producto, volumen y requerimientos.'
  },
  {
    title: 'Programamos entrega o recolección',
    description: 'Coordinamos el movimiento para mantener activa tu operación.'
  }
];
</script>

<template>
  <section class="quote-process section-pad">
    <div class="container quote-process__grid">
      <div>
        <SectionHeading
          eyebrow="Proceso de cotización"
          title="Cotiza sin fricción y con datos útiles desde el primer contacto"
          description="La compra industrial necesita claridad. Por eso pedimos la información justa para responder con una propuesta viable."
        />
        <a class="button button--accent" :href="getWhatsAppLink()" target="_blank" rel="noreferrer">
          Enviar mensaje por WhatsApp
        </a>
      </div>
      <ol class="step-list">
        <li v-for="(step, index) in steps" :key="step.title" data-reveal>
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
