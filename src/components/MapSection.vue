<script setup lang="ts">
import { computed } from 'vue';
import SectionHeading from './SectionHeading.vue';
import { contact, getWhatsAppLink } from '../data/contact';

const hasCoordinates = computed(() => Boolean(contact.mapLat && contact.mapLng));
const mapUrl = computed(() =>
  hasCoordinates.value
    ? `https://www.google.com/maps?q=${encodeURIComponent(`${contact.mapLat},${contact.mapLng}`)}&z=15&output=embed`
    : ''
);
</script>

<template>
  <section id="ubicacion" class="map-section section-pad">
    <div class="container map-section__grid">
      <div>
        <SectionHeading
          eyebrow="Ubicación y cobertura"
          title="Atención para empresas industriales, constructoras, transportistas y compradores B2B"
          description="La ubicación exacta se integrará cuando estén disponibles las coordenadas. El componente ya está preparado para renderizar Google Maps con latitud y longitud."
        />
        <a class="button" :href="getWhatsAppLink('Hola, quiero solicitar ubicación y cobertura de entrega para tarimas industriales.')" target="_blank" rel="noreferrer">
          Solicitar ubicación o ruta
        </a>
      </div>

      <div class="map-card" data-reveal>
        <iframe
          v-if="hasCoordinates"
          title="Ubicación de Tarimas El Trébol"
          :src="mapUrl"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div v-else class="map-placeholder">
          <span aria-hidden="true">⌖</span>
          <h3>Google Maps listo para coordenadas</h3>
          <p>Agrega VITE_MAP_LAT y VITE_MAP_LNG en el archivo .env.</p>
        </div>
      </div>
    </div>
  </section>
</template>
