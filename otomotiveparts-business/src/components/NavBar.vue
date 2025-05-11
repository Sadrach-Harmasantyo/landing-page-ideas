<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const mobileNavOpen = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value;
};
</script>

<template>
  <header :class="{ scrolled: isScrolled, open: mobileNavOpen }">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <h1>AutoParts<span>Pro</span></h1>
        </div>

        <nav class="desktop-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div class="search-container">
          <input
            type="text"
            placeholder="Search parts..."
            class="search-input"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <button class="mobile-menu-btn" @click="toggleMobileNav">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div class="mobile-nav" :class="{ open: mobileNavOpen }">
      <div class="mobile-search-container">
        <input
          type="text"
          placeholder="Search parts..."
          class="mobile-search-input"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mobile-search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <ul>
        <li><a href="#home" @click="mobileNavOpen = false">Home</a></li>
        <li><a href="#products" @click="mobileNavOpen = false">Products</a></li>
        <li><a href="#services" @click="mobileNavOpen = false">Services</a></li>
        <li><a href="#about" @click="mobileNavOpen = false">About</a></li>
        <li>
          <a href="#testimonials" @click="mobileNavOpen = false"
            >Testimonials</a
          >
        </li>
        <li><a href="#contact" @click="mobileNavOpen = false">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: var(--space-4) 0;
  transition: all 0.3s ease;
  background-color: transparent;
}

header.scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: var(--space-2) 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 1.75rem;
  margin: 0;
  color: white;
  transition: color 0.3s ease;
}

header.scrolled .logo h1 {
  color: var(--primary-900);
}

.logo span {
  color: var(--accent-500);
}

.desktop-nav ul {
  display: flex;
  list-style: none;
  gap: var(--space-6);
}

.desktop-nav a {
  color: white;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
}

header.scrolled .desktop-nav a {
  color: var(--neutral-800);
}

.desktop-nav a:hover {
  color: var(--primary-600);
}

.desktop-nav a:after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-600);
  transition: width 0.3s ease;
}

.desktop-nav a:hover:after {
  width: 100%;
}

.search-btn {
  background: transparent;
  border: none;
  color: var(--neutral-800);
  padding: var(--space-2);
  cursor: pointer;
}

.search-btn:hover {
  color: var(--primary-600);
  background: transparent;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  padding: 8px 12px;
  padding-right: 36px;
  border-radius: 20px;
  border: 1px solid var(--neutral-300);
  font-size: 0.875rem;
  width: 180px;
  transition: all 0.3s ease;
  background: white;
  color: var(--primary-500);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 2px rgba(var(--primary-500-rgb), 0.2);
}

.search-icon {
  position: absolute;
  right: 12px;
  width: 16px;
  height: 16px;
  color: var(--primary-500);
  pointer-events: none;
}

.mobile-menu-btn {
  display: none;
  outline: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002; /* Ensure button stays above the mobile nav */
}

.mobile-menu-btn span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: white;
  transition: all 0.3s ease;
}

header.scrolled .mobile-menu-btn span {
  background-color: var(--neutral-800);
}

header.open .mobile-menu-btn span {
  background-color: var(--neutral-800);
}

header.open .mobile-menu-btn span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

header.open .mobile-menu-btn span:nth-child(2) {
  opacity: 0;
}

header.open .mobile-menu-btn span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: white;
  padding: var(--space-16) var(--space-6);
  transition: right 0.3s ease;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 1001;
}

.mobile-nav.open {
  right: 0;
}

.mobile-search-container {
  position: relative;
  margin-bottom: var(--space-8);
}

.mobile-search-input {
  width: 100%;
  padding: 10px 12px;
  padding-right: 36px;
  border-radius: 20px;
  border: 1px solid var(--neutral-300);
  font-size: 0.95rem;
  background: white;
  color: var(--primary-500);
}

.mobile-search-input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 2px rgba(var(--primary-500-rgb), 0.2);
}

.mobile-search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--primary-500);
  pointer-events: none;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
}

.mobile-nav li {
  margin-bottom: var(--space-6);
}

.mobile-nav a {
  color: var(--neutral-800);
  font-size: 1.25rem;
  font-weight: 600;
  display: block;
  transition: color 0.3s ease;
}

.mobile-nav a:hover {
  color: var(--primary-600);
}

/* @media (prefers-color-scheme: dark) {
  header.scrolled {
    background-color: rgba(17, 24, 39, 0.95);
  }

  .logo h1 {
    color: white;
  }

  .desktop-nav a {
    color: white;
  }

  .search-input {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: var(--neutral-700);
    color: white;
  }

  .search-icon {
    color: var(--primary-400);
  }

  .mobile-menu-btn span {
    background-color: white;
  }

  .mobile-nav {
    background-color: var(--neutral-900);
  }

  .mobile-nav a {
    color: white;
  }
} */

@media (max-width: 980px) {
  .desktop-nav {
    display: none;
  }

  .search-container {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  header.open .mobile-menu-btn span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  header.open .mobile-menu-btn span:nth-child(2) {
    opacity: 0;
  }

  header.open .mobile-menu-btn span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}
</style>
