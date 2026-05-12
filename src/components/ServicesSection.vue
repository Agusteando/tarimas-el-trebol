<script setup lang="ts">
import IconSymbol from './IconSymbol.vue';
import { contact, formatPhone, getWhatsAppLink } from '../data/contact';
import { additionalServices, serviceProofs } from '../data/services';
</script>

<template>
  <section id="servicios" class="additional-services" aria-labelledby="services-title">
    <div class="container additional-services__inner">
      <div class="additional-services__hero" data-reveal>
        <p class="eyebrow eyebrow--light">Servicios adicionales</p>
        <h2 id="services-title">También recolectamos tarima y chatarra industrial</h2>
        <p>Ayudamos a tu empresa a liberar espacio operativo y dar el mejor destino a materiales reutilizables.</p>

        <div class="additional-services__actions" aria-label="Opciones de contacto para recolección">
          <a
            class="additional-services__primary"
            :href="getWhatsAppLink('Hola, quiero agendar una recolección de tarima y materiales industriales.')"
            target="_blank"
            rel="noreferrer"
          >
            <IconSymbol name="whatsapp" />
            <span>Agendar recolección por WhatsApp</span>
          </a>
          <a class="additional-services__secondary" :href="`tel:+52${contact.phoneCallNumber}`">
            <IconSymbol name="calendar" />
            <span>Agendar por teléfono</span>
          </a>
        </div>
      </div>

      <div class="additional-services__grid" aria-label="Servicios de recolección">
        <article v-for="service in additionalServices" :key="service.title" class="additional-service-card" data-reveal>
          <span class="additional-service-card__icon" aria-hidden="true">
            <IconSymbol :name="service.icon" />
          </span>
          <h3>{{ service.title }}</h3>
          <span class="additional-service-card__accent" aria-hidden="true"></span>
          <p>{{ service.description }}</p>
          <a
            class="additional-service-card__link"
            :href="getWhatsAppLink(`Hola, quiero información sobre ${service.title.toLowerCase()}.`)"
            target="_blank"
            rel="noreferrer"
            :aria-label="`Solicitar información sobre ${service.title}`"
          >
            <IconSymbol name="arrow" />
          </a>
        </article>
      </div>

      <div class="additional-services__showcase" data-reveal>
        <figure class="additional-services__photo">
          <img src="/images/services/recoleccion-operativa.webp" alt="Camión con tarimas y montacargas en operación industrial" loading="lazy" />
        </figure>

        <aside class="additional-services__proof-panel" aria-label="Beneficios de la recolección">
          <article v-for="proof in serviceProofs" :key="proof.title">
            <span class="additional-services__proof-icon" aria-hidden="true">
              <IconSymbol :name="proof.icon" />
            </span>
            <span>
              <strong>{{ proof.title }}</strong>
              <small>{{ proof.text }}</small>
            </span>
          </article>
        </aside>
      </div>

      <div class="additional-services__footer" data-reveal>
        <span class="additional-services__award" aria-hidden="true">
          <IconSymbol name="award" />
        </span>
        <strong>Somos tu aliado en la gestión de materiales reutilizables.</strong>
        <span class="additional-services__divider" aria-hidden="true"></span>
        <p>Menos desecho, más eficiencia, mayor valor para tu empresa.</p>
        <a
          class="additional-services__footer-link"
          :href="getWhatsAppLink('Hola, quiero hablar sobre la recolección de materiales reutilizables.')"
          target="_blank"
          rel="noreferrer"
        >Hablemos de tu recolección</a>
        <a class="additional-services__phone" :href="`tel:+52${contact.phoneCallNumber}`">
          <IconSymbol name="phone" />
          <span>{{ formatPhone(contact.phoneCallNumber) }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
