<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
    ]"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <a href="#" class="flex items-center space-x-2">
        <span class="text-primary-500 text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </span>
        <span
          class="font-heading font-bold text-2xl"
          :class="isScrolled ? 'text-neutral-800' : 'text-white'"
          >DentalCare</span
        >
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden xl:flex items-center space-x-6">
        <ul class="flex items-center space-x-6">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              :class="[
                'font-medium hover:text-primary-500 transition-colors duration-200',
                isScrolled ? 'text-neutral-700' : 'text-white',
              ]"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <a href="#contact" class="btn btn-primary">Book Appointment</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="xl:hidden"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          :class="isScrolled ? 'text-neutral-800' : 'text-white'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isMobileMenuOpen"
      class="xl:hidden bg-white shadow-lg fixed top-16 left-1/2 transform -translate-x-1/2 w-11/12 rounded-lg mx-auto"
    >
      <ul class="py-4 px-6 space-y-4">
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.href"
            class="block text-neutral-700 hover:text-primary-500 transition-colors duration-200"
            @click="closeMobileMenu"
          >
            {{ link.name }}
          </a>
        </li>
        <li class="pt-4 border-t border-gray-200">
          <a
            href="#contact"
            class="btn btn-primary w-full text-center"
            @click="closeMobileMenu"
            >Book Appointment</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>
