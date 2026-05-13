<script setup lang="ts">
import { computed } from 'vue';
import IconBubble from './IconBubble.vue';
import IconSymbol from './IconSymbol.vue';
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';

const mapCoordinates = computed(() => ({
  lat: Number(contact.mapLat),
  lng: Number(contact.mapLng)
}));

const openStreetMapEmbedUrl = computed(() => {
  const lat = Number.isFinite(mapCoordinates.value.lat) ? mapCoordinates.value.lat : 19.2985595;
  const lng = Number.isFinite(mapCoordinates.value.lng) ? mapCoordinates.value.lng : -99.6898324;
  const latDelta = 0.075;
  const lngDelta = 0.115;
  const bbox = [lng - lngDelta, lat - latDelta, lng + lngDelta, lat + latDelta].join('%2C');

  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik`;
});

type LocationDetail = {
  icon: string;
  title: string;
  text: string[];
  href?: string;
};

type LocationReason = {
  icon: string;
  title: string;
  text: string;
};

const locationDetails: LocationDetail[] = [
  {
    icon: 'pin',
    title: 'Planta Toluca',
    text: ['Parque Industrial Toluca 2000', 'Toluca, Estado de México, C.P. 50200']
  },
  {
    icon: 'clock',
    title: 'Horario de atención',
    text: ['Lunes a Viernes: 8:00 - 18:00', 'Sábado: 8:00 - 13:00']
  },
  {
    icon: 'phone',
    title: 'Teléfono',
    text: [formatPhone(contact.phoneCallNumber)],
    href: `tel:+52${contact.phoneCallNumber}`
  },
  {
    icon: 'truck',
    title: 'Cobertura',
    text: ['Entregas en todo México con', 'rutas propias y alianzas logísticas.']
  },
  {
    icon: 'mail',
    title: 'Correo',
    text: [contact.email],
    href: `mailto:${contact.email}`
  }
];

const locationReasons: LocationReason[] = [
  {
    icon: 'pin',
    title: 'Acceso a las principales',
    text: 'vías de comunicación'
  },
  {
    icon: 'pin',
    title: 'Conexión rápida con',
    text: 'CDMX y Bajío'
  },
  {
    icon: 'truck',
    title: 'Logística eficiente para',
    text: 'mejores tiempos de entrega'
  },
  {
    icon: 'users',
    title: 'Atención cercana y',
    text: 'soporte local'
  }
];
</script>

<template>
  <section id="ubicacion" class="location-section" aria-labelledby="location-title">
    <div class="container location-section__grid">
      <div class="location-section__content" data-reveal>
        <p class="eyebrow">Estamos cerca de ti</p>
        <h2 id="location-title">Ubicación estratégica, cobertura en todo México.</h2>
        <div class="location-section__line" aria-hidden="true"></div>
        <p class="location-section__lead">
          Nuestra planta en Toluca nos permite atender de forma eficiente a empresas en todo el país con entregas confiables y puntuales.
        </p>

        <div class="location-section__details" aria-label="Datos de ubicación y cobertura">
          <component
            :is="detail.href ? 'a' : 'article'"
            v-for="detail in locationDetails"
            :key="detail.title"
            class="location-section__detail"
            :href="detail.href"
          >
            <IconBubble :icon="detail.icon" size="sm" tone="soft" />
            <span>
              <strong>{{ detail.title }}</strong>
              <small v-for="line in detail.text" :key="line">{{ line }}</small>
            </span>
          </component>
        </div>
      </div>

      <div class="location-section__map-card">
        <iframe
          class="location-section__open-map location-section__open-map--loaded location-section__osm-frame"
          :src="openStreetMapEmbedUrl"
          title="Mapa de ubicación de El Trébol en Toluca"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <a
          class="location-section__map-hit-area"
          :href="contact.googleMapsLink"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir ubicación de El Trébol en Google Maps"
        ></a>

        <span class="location-map-visual__marker location-map-visual__marker--live" aria-hidden="true">
          <img src="/images/icons/map-marker-trebol.png" alt="" loading="lazy" />
        </span>
        <strong class="location-section__map-label">Toluca</strong>

        <aside class="location-section__reason-card" aria-label="Ventajas de nuestra ubicación">
          <h3>¿Por qué elegir nuestra ubicación?</h3>
          <article v-for="item in locationReasons" :key="`${item.title}-${item.text}`">
            <IconBubble :icon="item.icon" size="sm" tone="soft" />
            <span>
              <strong>{{ item.title }}</strong>
              <small>{{ item.text }}</small>
            </span>
          </article>
        </aside>
      </div>
    </div>

    <div class="container location-section__cta" data-reveal>
      <div class="location-section__cta-copy">
        <span class="location-section__cta-icon" aria-hidden="true">
          <IconSymbol name="whatsapp" />
        </span>
        <span>
          <strong>¿Listo para trabajar juntos?</strong>
          <small>Cotiza tus tarimas y soluciones a medida. Te respondemos en minutos.</small>
        </span>
      </div>

      <div class="location-section__cta-actions">
        <a
          class="button button--accent location-section__button location-section__button--whatsapp"
          :href="getWhatsAppLink('Hola, quiero cotizar tarimas industriales para mi operación.')"
          target="_blank"
          rel="noreferrer"
        >
          <IconSymbol name="whatsapp" />
          <span>Cotizar por WhatsApp</span>
        </a>
        <a class="button location-section__button location-section__button--phone" :href="`tel:+52${contact.phoneCallNumber}`">
          <IconSymbol name="phone" />
          <span>Llamar ahora</span>
        </a>
      </div>
    </div>
  </section>
</template>
