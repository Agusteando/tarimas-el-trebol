<script setup lang="ts">
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
import MapSection from './components/MapSection.vue';
import FinalCTA from './components/FinalCTA.vue';
import AppFooter from './components/AppFooter.vue';
import FloatingWhatsApp from './components/FloatingWhatsApp.vue';
import { useReveal } from './composables/useReveal';

useReveal();
</script>

<template>
  <AppHeader />
  <main>
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
    <MapSection />
    <FinalCTA />
  </main>
  <AppFooter />
  <FloatingWhatsApp />
</template>
