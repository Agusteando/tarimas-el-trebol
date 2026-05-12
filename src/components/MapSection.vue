<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import IconBubble from './IconBubble.vue';
import IconSymbol from './IconSymbol.vue';
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';

declare global {
  interface Window {
    L?: any;
  }
}

const mapElement = ref<HTMLElement | null>(null);
const mapLoaded = ref(false);
const mapLoadFailed = ref(false);

const LEAFLET_SCRIPT_ID = 'el-trebol-leaflet-js';
const LEAFLET_STYLE_ID = 'el-trebol-leaflet-css';
const LEAFLET_SCRIPT_SRC = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
const LEAFLET_STYLE_HREF = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
const markerIconUrl = '/images/icons/map-marker-trebol.png';

let mapInstance: any = null;
let markerInstance: any = null;
let fallbackTimer: number | undefined;

const mapCoordinates = computed(() => ({
  lat: Number(contact.mapLat),
  lng: Number(contact.mapLng)
}));

const hasMapCoordinates = computed(() =>
  Number.isFinite(mapCoordinates.value.lat) && Number.isFinite(mapCoordinates.value.lng)
);

const coverageItems = [
  {
    icon: 'users',
    title: 'Atención B2B',
    text: 'Soluciones para empresas industriales y compradores mayoristas.'
  },
  {
    icon: 'delivery-clock',
    title: 'Entregas ágiles',
    text: 'Logística eficiente desde Toluca y zona metropolitana.'
  },
  {
    icon: 'globe',
    title: 'Cobertura nacional',
    text: 'Envíos confiables a todo México con aliados estratégicos.'
  }
];

const contactCards = [
  {
    icon: 'phone',
    label: `Tel. ${formatPhone(contact.phoneCallNumber)}`,
    href: `tel:+52${contact.phoneCallNumber}`
  },
  {
    icon: 'whatsapp',
    label: `WhatsApp ${formatPhone(contact.whatsappPhone)}`,
    href: getWhatsAppLink('Hola, quiero información sobre cobertura y entregas de tarimas industriales.')
  },
  {
    icon: 'mail',
    label: contact.email,
    href: `mailto:${contact.email}`
  }
];

const serviceAreaChips = [
  { icon: 'pin', label: 'Toluca' },
  { icon: 'building', label: 'Zona metropolitana' },
  { icon: 'truck', label: 'Envíos a todo México' }
];

const loadLeafletCss = () => {
  if (document.getElementById(LEAFLET_STYLE_ID)) return;

  const link = document.createElement('link');
  link.id = LEAFLET_STYLE_ID;
  link.rel = 'stylesheet';
  link.href = LEAFLET_STYLE_HREF;
  link.integrity = 'sha256-p4NxAoJBhIINfQnn5Z8wVbTuR5kVQK4Ck3j2haagFlk=';
  link.crossOrigin = '';
  document.head.appendChild(link);
};

const loadLeafletScript = () =>
  new Promise<void>((resolve, reject) => {
    if (window.L) {
      resolve();
      return;
    }

    const existing = document.getElementById(LEAFLET_SCRIPT_ID) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Leaflet failed to load')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = LEAFLET_SCRIPT_ID;
    script.src = LEAFLET_SCRIPT_SRC;
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => resolve(), { once: true });
    script.addEventListener('error', () => reject(new Error('Leaflet failed to load')), { once: true });
    document.head.appendChild(script);
  });

const initializeOpenStreetMap = async () => {
  if (!hasMapCoordinates.value || !mapElement.value) {
    mapLoadFailed.value = true;
    return;
  }

  try {
    loadLeafletCss();
    await loadLeafletScript();
    await nextTick();

    if (!window.L || !mapElement.value) {
      mapLoadFailed.value = true;
      return;
    }

    const L = window.L;
    const center = [mapCoordinates.value.lat, mapCoordinates.value.lng];

    mapInstance = L.map(mapElement.value, {
      center,
      zoom: contact.mapZoom,
      zoomControl: false,
      attributionControl: true,
      scrollWheelZoom: false,
      doubleClickZoom: true,
      dragging: true,
      tap: true
    });

    L.tileLayer(contact.openStreetMapTileUrl, {
      attribution: contact.openStreetMapAttribution,
      maxZoom: 19,
      minZoom: 5,
      className: 'location-section__leaflet-tiles'
    }).addTo(mapInstance);

    const customMarker = L.icon({
      iconUrl: markerIconUrl,
      iconSize: [72, 88],
      iconAnchor: [36, 88],
      popupAnchor: [0, -78],
      className: 'location-section__leaflet-marker'
    });

    markerInstance = L.marker(center, {
      icon: customMarker,
      title: 'El Trébol — Tarimas y Empaques Industriales'
    }).addTo(mapInstance);

    markerInstance.bindPopup('<strong>El Trébol</strong><br>Tarimas y Empaques Industriales', {
      closeButton: false,
      autoPan: false,
      className: 'location-section__leaflet-popup'
    });

    mapInstance.whenReady(() => {
      mapLoaded.value = true;
      window.setTimeout(() => mapInstance?.invalidateSize?.(), 120);
    });
  } catch {
    mapLoadFailed.value = true;
  } finally {
    if (fallbackTimer) {
      window.clearTimeout(fallbackTimer);
      fallbackTimer = undefined;
    }
  }
};

onMounted(() => {
  fallbackTimer = window.setTimeout(() => {
    if (!mapLoaded.value) mapLoadFailed.value = true;
  }, 6000);

  initializeOpenStreetMap();
});

onBeforeUnmount(() => {
  if (fallbackTimer) {
    window.clearTimeout(fallbackTimer);
    fallbackTimer = undefined;
  }

  markerInstance?.remove?.();
  markerInstance = null;
  mapInstance?.remove?.();
  mapInstance = null;
});
</script>

<template>
  <section id="ubicacion" class="location-section" aria-labelledby="location-title">
    <div class="container location-section__grid">
      <div class="location-section__content" data-reveal>
        <p class="eyebrow">Ubicación y cobertura</p>
        <h2 id="location-title">Atendemos empresas industriales y compradores B2B</h2>
        <div class="location-section__line" aria-hidden="true"></div>
        <p class="location-section__lead">
          En El Trébol atendemos a empresas industriales, constructoras, transportistas y compradores de tarimas desde Toluca y su zona metropolitana, con cobertura y envíos a todo México.
        </p>

        <div class="location-section__contact-list" aria-label="Datos de contacto">
          <a v-for="card in contactCards" :key="card.label" :href="card.href" class="location-section__contact-card">
            <IconBubble :icon="card.icon" size="sm" tone="soft" />
            <span>{{ card.label }}</span>
          </a>
        </div>

        <div class="location-section__chips" aria-label="Cobertura comercial">
          <span v-for="chip in serviceAreaChips" :key="chip.label">
            <IconSymbol :name="chip.icon" />
            {{ chip.label }}
          </span>
        </div>

        <div class="location-section__actions">
          <a
            class="button button--accent location-section__button location-section__button--whatsapp"
            :href="getWhatsAppLink('Hola, quiero información sobre cobertura y entregas de tarimas industriales.')"
            target="_blank"
            rel="noreferrer"
          >
            <IconSymbol name="whatsapp" />
            <span>WhatsApp</span>
          </a>
          <a class="button location-section__button location-section__button--phone" :href="`tel:+52${contact.phoneCallNumber}`">
            <IconSymbol name="phone" />
            <span>Llamar ahora</span>
          </a>
        </div>
      </div>

      <div class="location-section__map-card" data-reveal>
        <div
          v-show="!mapLoadFailed"
          ref="mapElement"
          class="location-section__open-map"
          :class="{ 'location-section__open-map--loaded': mapLoaded }"
          aria-label="Mapa interactivo de ubicación de El Trébol en Toluca"
        ></div>

        <a
          v-if="mapLoadFailed"
          class="location-map-visual"
          :href="contact.googleMapsLink"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir ubicación de El Trébol en Google Maps"
        >
          <span class="location-map-visual__green location-map-visual__green--one"></span>
          <span class="location-map-visual__green location-map-visual__green--two"></span>
          <span class="location-map-visual__green location-map-visual__green--three"></span>
          <span class="location-map-visual__road location-map-visual__road--one"></span>
          <span class="location-map-visual__road location-map-visual__road--two"></span>
          <span class="location-map-visual__road location-map-visual__road--three"></span>
          <span class="location-map-visual__road location-map-visual__road--four"></span>
          <span class="location-map-visual__road location-map-visual__road--five"></span>
          <span class="location-map-visual__road location-map-visual__road--six"></span>
          <span class="location-map-visual__highway location-map-visual__highway--one">15</span>
          <span class="location-map-visual__highway location-map-visual__highway--two">15</span>
          <span class="location-map-visual__highway location-map-visual__highway--three">134</span>
          <span class="location-map-visual__highway location-map-visual__highway--four">134</span>
          <span class="location-map-visual__highway location-map-visual__highway--five">55D</span>
          <span class="location-map-visual__label location-map-visual__label--zinacantepec">Zinacantepec</span>
          <span class="location-map-visual__label location-map-visual__label--lerma">Lerma<br />de Villada</span>
          <span class="location-map-visual__label location-map-visual__label--almoloya">Almoloya<br />de Juárez</span>
          <span class="location-map-visual__label location-map-visual__label--toluca">Toluca<br />de Lerdo</span>
          <span class="location-map-visual__label location-map-visual__label--metepec">Metepec</span>
          <span class="location-map-visual__label location-map-visual__label--san-mateo">San Mateo<br />Atenco</span>
          <span class="location-map-visual__marker">
            <img src="/images/icons/map-marker-trebol.png" alt="" loading="lazy" />
          </span>
        </a>

        <a
          class="location-section__map-link"
          :href="contact.googleMapsLink"
          target="_blank"
          rel="noreferrer"
        >
          <IconSymbol name="pin" />
          <span>Abrir en Google Maps</span>
        </a>

        <aside class="location-section__coverage-card" aria-label="Cobertura operativa">
          <h3>Cobertura operativa</h3>
          <article v-for="item in coverageItems" :key="item.title">
            <IconBubble :icon="item.icon" size="sm" tone="soft" />
            <span>
              <strong>{{ item.title }}</strong>
              <small>{{ item.text }}</small>
            </span>
          </article>
        </aside>
      </div>
    </div>
  </section>
</template>
