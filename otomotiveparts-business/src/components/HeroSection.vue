<script setup lang="ts">
import { ref, onMounted } from 'vue';

const heroImages = [
  'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length;
};

onMounted(() => {
  setInterval(nextImage, 5000);
});
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-background">
      <div 
        v-for="(image, index) in heroImages" 
        :key="index"
        class="hero-image"
        :class="{ active: index === currentImageIndex }"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <div class="overlay"></div>
    </div>
    
    <div class="container">
      <div class="hero-content" data-aos="fade-up">
        <h1>Premium Auto Parts for Every Need</h1>
        <p>Quality components for all makes and models. Find the perfect part backed by our expert support and warranty.</p>
        <div class="hero-buttons">
          <a href="#products" class="btn btn-accent">Shop Now</a>
          <a href="#services" class="btn btn-primary">Our Services</a>
        </div>
      </div>
    </div>
    
    <div class="hero-scroll-indicator">
      <a href="#products">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <div>
          <span class="arrow-down"></span>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  transform: scale(1.05);
}

.hero-image.active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 1s ease-in-out, transform 6s ease-out;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(10, 38, 71, 0.9), rgba(10, 38, 71, 0.7));
}

.hero-content {
  max-width: 700px;
  z-index: 1;
  padding: var(--space-8) 0;
}

.hero-content h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: var(--space-6);
  color: white;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: var(--space-8);
  color: var(--neutral-200);
}

.hero-buttons {
  display: flex;
  gap: var(--space-4);
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.mouse {
  width: 28px;
  height: 45px;
  border: 2px solid white;
  border-radius: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.wheel {
  width: 4px;
  height: 8px;
  background-color: white;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  animation: scroll 2s infinite;
}

.arrow-down {
  display: block;
  width: 10px;
  height: 10px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
  margin: 0 auto;
  animation: arrow 2s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}

@keyframes arrow {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-5px, -5px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(5px, 5px);
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.25rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: var(--space-3);
  }
  
  .btn {
    width: 100%;
  }
}
</style>