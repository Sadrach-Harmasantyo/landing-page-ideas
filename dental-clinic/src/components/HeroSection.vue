<script setup lang="ts">
import { ref, onMounted } from "vue";

const isTyping = ref(true);
const typedText = ref("");
const fullText = "Your Best Smile Starts Here";
let charIndex = 0;

onMounted(() => {
  typingAnimation();
});

function typingAnimation() {
  if (charIndex < fullText.length) {
    typedText.value += fullText.charAt(charIndex);
    charIndex++;
    setTimeout(typingAnimation, 100);
  } else {
    isTyping.value = false;
  }
}
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.pexels.com/photos/3845127/pexels-photo-3845127.jpeg"
        alt="Dental clinic interior"
        class="w-full h-full object-cover brightness-50"
      />
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10 text-white">
      <div class="max-w-3xl" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span v-if="isTyping" class="inline-block"
            >{{ typedText }}<span class="animate-ping">|</span></span
          >
          <span v-else>{{ fullText }}</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-200">
          Modern dental care with a gentle touch. Experience comfort and
          excellence in every visit.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#contact" class="btn btn-primary text-lg px-8 py-4"
            >Book Your Appointment</a
          >
          <a
            href="#services"
            class="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
            >Our Services</a
          >
        </div>
      </div>

      <!-- Stats Cards -->
      <div
        class="hidden lg:grid grid-cols-4 gap-8 mt-24"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg text-center"
        >
          <h3 class="text-3xl font-bold mb-2">15+</h3>
          <p>Years Experience</p>
        </div>
        <div
          class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg text-center"
        >
          <h3 class="text-3xl font-bold mb-2">8,500+</h3>
          <p>Happy Patients</p>
        </div>
        <div
          class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg text-center"
        >
          <h3 class="text-3xl font-bold mb-2">12</h3>
          <p>Dental Experts</p>
        </div>
        <div
          class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg text-center"
        >
          <h3 class="text-3xl font-bold mb-2">25+</h3>
          <p>Award Winning</p>
        </div>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <a
      href="#services"
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
    >
      <div
        className="w-8 h-8 border-l-4 border-b-4 border-white rotate-[-45deg]"
      ></div>
    </a>
  </section>
</template>
