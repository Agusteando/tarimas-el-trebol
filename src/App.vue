<script setup lang="ts">
import { computed } from 'vue';
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import TrustBar from './components/TrustBar.vue';
import AboutSection from './components/AboutSection.vue';
import MissionSection from './components/MissionSection.vue';
import ProductsSection from './components/ProductsSection.vue';
import SolutionsSection from './components/SolutionsSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import IndustriesSection from './components/IndustriesSection.vue';
import AdvantagesSection from './components/AdvantagesSection.vue';
import QuoteProcess from './components/QuoteProcess.vue';
import GallerySection from './components/GallerySection.vue';
import FaqSection from './components/FaqSection.vue';
import MapSection from './components/MapSection.vue';
import AppFooter from './components/AppFooter.vue';
import FloatingWhatsApp from './components/FloatingWhatsApp.vue';
import ProductsPage from './pages/ProductsPage.vue';
import LegalPage from './pages/LegalPage.vue';
import { useReveal } from './composables/useReveal';
import { useAppRoute } from './composables/useAppRoute';

const { currentPath } = useAppRoute();
const isProductsPage = computed(() => currentPath.value === '/productos');
const isPrivacyPage = computed(() => currentPath.value === '/aviso-de-privacidad');
const isTermsPage = computed(() => currentPath.value === '/terminos-y-condiciones');

useReveal();
</script>

<template>
  <AppHeader />
  <main>
    <ProductsPage v-if="isProductsPage" />
    <LegalPage v-else-if="isPrivacyPage" type="privacy" />
    <LegalPage v-else-if="isTermsPage" type="terms" />
    <template v-else>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <MissionSection />
      <ProductsSection />
      <SolutionsSection />
      <ServicesSection />
      <IndustriesSection />
      <AdvantagesSection />
      <QuoteProcess />
      <GallerySection />
      <FaqSection />
      <MapSection />
    </template>
  </main>
  <AppFooter />
  <FloatingWhatsApp />
</template>
