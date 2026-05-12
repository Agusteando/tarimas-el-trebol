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
      <div class="map-section__content">
        <SectionHeading
          eyebrow="Ubicación y cobertura"
          title="Atención para empresas industriales, constructoras, transportistas y compradores B2B"
          description="El componente está preparado para renderizar Google Maps con latitud y longitud cuando estén disponibles."
        />
        <div class="map-section__details" data-reveal>
          <div>
            <strong>Cobertura comercial</strong>
            <span>Empresas industriales, constructoras, transportistas y operaciones de carga.</span>
          </div>
          <div>
            <strong>Mapa listo para producción</strong>
            <span>Agrega VITE_MAP_LAT y VITE_MAP_LNG en el archivo .env.</span>
          </div>
        </div>
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
          <p>Cuando tengas latitud y longitud, se renderiza el mapa sin tocar el layout.</p>
        </div>
      </div>
    </div>
  </section>
</template>
