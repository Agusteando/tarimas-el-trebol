<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import IconBubble from './IconBubble.vue';
import IconSymbol from './IconSymbol.vue';
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';

declare global {
  interface Window {
    google?: any;
    initElTrebolMap?: () => void;
  }
}

const mapElement = ref<HTMLElement | null>(null);
const mapLoaded = ref(false);
const mapLoadFailed = ref(false);

const mapCoordinates = computed(() => ({
  lat: Number(contact.mapLat),
  lng: Number(contact.mapLng)
}));

const hasMapCoordinates = computed(() =>
  Number.isFinite(mapCoordinates.value.lat) && Number.isFinite(mapCoordinates.value.lng)
);

const shouldUseGoogleMap = computed(() => Boolean(contact.googleMapsApiKey && hasMapCoordinates.value));

const coverageItems = [
  {
    icon: 'users',
    title: 'Atención B2B',
    text: 'Soluciones para empresas industriales y compradores mayoristas.'
  },
  {
    icon: 'truck',
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
    icon: 'phone',
    label: `Tel. ${formatPhone(contact.whatsappPhone)}`,
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

const googleMapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#f5f5ef' }] },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#39433d' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#fffdf7' }, { weight: 3 }] },
  { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#d8ded3' }] },
  { featureType: 'landscape.man_made', elementType: 'geometry', stylers: [{ color: '#f7f7f2' }] },
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#e5f1e1' }, { visibility: 'on' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#d5d9d2' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#cfd5d0' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#c7cdd0' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#f8f8f4' }] },
  { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#21362c' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#dfe9e5' }] }
];

const markerSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="96" viewBox="0 0 80 96">
    <filter id="s" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#082d19" flood-opacity="0.24"/></filter>
    <path filter="url(#s)" d="M40 90S17 62.5 17 39.5C17 26.5 27.3 16 40 16s23 10.5 23 23.5C63 62.5 40 90 40 90Z" fill="#0b6939"/>
    <circle cx="40" cy="39" r="18" fill="#fff"/>
    <path d="M38 36c-9-12-19-7-16 2 2 7 10 5 16-2Zm4 0c9-12 19-7 16 2-2 7-10 5-16-2Zm-4 6c-9 12-19 7-16-2 2-7 10-5 16 2Zm4 0c9 12 19 7 16-2-2-7-10-5-16 2Zm-2 1v13" fill="none" stroke="#0b6939" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`);

let mapInstance: any = null;
let markerInstance: any = null;
let cleanupCallback = false;

const initializeMap = () => {
  if (!mapElement.value || !window.google || !hasMapCoordinates.value) return;

  const center = mapCoordinates.value;
  mapInstance = new window.google.maps.Map(mapElement.value, {
    center,
    zoom: contact.mapZoom,
    disableDefaultUI: true,
    clickableIcons: false,
    gestureHandling: 'cooperative',
    styles: googleMapStyles,
    backgroundColor: '#f7f8f2'
  });

  markerInstance = new window.google.maps.Marker({
    position: center,
    map: mapInstance,
    title: 'El Trébol — Tarimas y Empaques Industriales',
    icon: {
      url: `data:image/svg+xml;charset=UTF-8,${markerSvg}`,
      scaledSize: new window.google.maps.Size(64, 77),
      anchor: new window.google.maps.Point(32, 77)
    }
  });

  mapLoaded.value = true;
};

const loadGoogleMap = () => {
  if (!shouldUseGoogleMap.value) return;

  if (window.google?.maps) {
    initializeMap();
    return;
  }

  const existingScript = document.getElementById('el-trebol-google-maps');
  window.initElTrebolMap = initializeMap;
  cleanupCallback = true;

  if (existingScript) return;

  const script = document.createElement('script');
  script.id = 'el-trebol-google-maps';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(contact.googleMapsApiKey)}&callback=initElTrebolMap`;
  script.async = true;
  script.defer = true;
  script.onerror = () => {
    mapLoadFailed.value = true;
  };
  document.head.appendChild(script);
};

onMounted(loadGoogleMap);

onBeforeUnmount(() => {
  markerInstance?.setMap?.(null);
  markerInstance = null;
  mapInstance = null;

  if (cleanupCallback && window.initElTrebolMap === initializeMap) {
    delete window.initElTrebolMap;
  }
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
        <div v-if="shouldUseGoogleMap && !mapLoadFailed" ref="mapElement" class="location-section__google-map" :class="{ 'location-section__google-map--loaded': mapLoaded }"></div>
        <a
          v-else
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
            <IconSymbol name="clover" />
          </span>
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
