<script setup lang="ts">
import { trustStats } from '../data/advantages';
</script>

<template>
  <section class="trust-bar" aria-label="Datos de confianza">
    <div class="container trust-bar__grid">
      <div v-for="stat in trustStats" :key="stat" class="trust-bar__item">
        <span aria-hidden="true"></span>
        {{ stat }}
      </div>
    </div>
  </section>
</template>
