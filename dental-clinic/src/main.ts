import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 50,
});

createApp(App).mount("#app");
