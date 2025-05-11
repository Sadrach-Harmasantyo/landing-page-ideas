<script setup lang="ts">
import HeroSection from "../components/HeroSection.vue";
import ProductsSection from "../components/ProductsSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import TestimonialsSection from "../components/TestimonialsSection.vue";
import ContactSection from "../components/ContactSection.vue";
import AboutSection from "../components/AboutSection.vue";
</script>

<template>
  <main>
    <HeroSection />
    <ProductsSection />
    <ServicesSection />
    <AboutSection />
    <TestimonialsSection />
    <ContactSection />
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
