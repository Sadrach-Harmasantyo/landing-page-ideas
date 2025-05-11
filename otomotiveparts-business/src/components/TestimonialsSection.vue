<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    position: "Fleet Manager",
    company: "Express Logistics",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "AutoPartsPro has been our go-to supplier for all fleet maintenance needs. Their quality parts and exceptional service have significantly reduced our downtime and maintenance costs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "Owner",
    company: "Williams Auto Repair",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "As an auto repair shop owner, I need reliable parts quickly. AutoPartsPro delivers premium quality components faster than any other supplier I've worked with. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "David Rodriguez",
    position: "Car Enthusiast",
    company: "Custom Builds",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "I've been building custom cars for years, and the precision and quality of parts from AutoPartsPro are unmatched. Their technical support team is incredibly knowledgeable.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Chen",
    position: "Service Director",
    company: "Metro Auto Group",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "Our dealership has partnered with AutoPartsPro for over three years. Their extensive inventory and quick fulfillment have helped us maintain our service excellence reputation.",
    rating: 5,
  },
];

const currentIndex = ref(0);
const intervalId = ref<number | null>(null);

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

const setTestimonial = (index: number) => {
  currentIndex.value = index;
  resetInterval();
};

const resetInterval = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
  intervalId.value = window.setInterval(nextTestimonial, 5000);
};

onMounted(() => {
  resetInterval();
});

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
});
</script>

<template>
  <section id="testimonials" class="section testimonials-section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>What Our Customers Say</h2>
        <p>Trusted by professionals and enthusiasts alike</p>
      </div>

      <div class="testimonials-slider" data-aos="fade-up">
        <div
          class="testimonials-wrapper"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="testimonial-card"
          >
            <div class="testimonial-rating">
              <span
                v-for="i in 5"
                :key="i"
                class="star"
                :class="{ active: i <= testimonial.rating }"
                >★</span
              >
            </div>
            <div class="testimonial-content">
              <p>{{ testimonial.content }}</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img :src="testimonial.avatar" :alt="testimonial.name" />
              </div>
              <div class="author-details">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.position }}, {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonials-controls">
          <button
            class="control-btn prev"
            @click="prevTestimonial"
            aria-label="Previous testimonial"
          >
            <span>◀</span>
          </button>
          <div class="testimonials-dots">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              class="dot-btn"
              :class="{ active: index === currentIndex }"
              @click="setTestimonial(index)"
              :aria-label="`Go to testimonial ${index + 1}`"
            ></button>
          </div>
          <button
            class="control-btn next"
            @click="nextTestimonial"
            aria-label="Next testimonial"
          >
            <span>▶</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  background-color: var(--neutral-100);
}

.section-title p {
  text-align: center;
  max-width: 600px;
  margin: 20px auto 50px;
  color: var(--neutral-600);
}

.testimonials-slider {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

.testimonials-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-card {
  flex: 0 0 100%;
  padding: var(--space-8);
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.testimonial-rating {
  margin-bottom: var(--space-4);
}

.star {
  color: var(--neutral-300);
  font-size: 1.25rem;
  margin-right: 2px;
}

.star.active {
  color: var(--accent-500);
}

.testimonial-content {
  margin-bottom: var(--space-6);
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--neutral-700);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: var(--space-4);
  border: 3px solid var(--primary-100);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-details h4 {
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.author-details p {
  color: var(--neutral-600);
  font-size: 0.9rem;
}

.testimonials-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--space-8);
}

.control-btn {
  background-color: transparent;
  border: none;
  color: var(--primary-600);
  font-size: 1rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  outline: none;
}

.control-btn:hover {
  background-color: var(--primary-100);
}

.testimonials-dots {
  display: flex;
  gap: 10px;
  margin: 0 var(--space-4);
}

.dot-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: var(--neutral-300);
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.dot-btn.active {
  background-color: var(--primary-600);
  transform: scale(1.2);
}

/* @media (prefers-color-scheme: dark) {
  .testimonials-section {
    background-color: var(--neutral-900);
  }
  
  .section-title p {
    color: var(--neutral-400);
  }
  
  .testimonial-card {
    background-color: var(--neutral-800);
  }
  
  .testimonial-content p {
    color: var(--neutral-300);
  }
  
  .author-details p {
    color: var(--neutral-400);
  }
  
  .author-avatar {
    border-color: var(--primary-800);
  }
  
  .control-btn:hover {
    background-color: var(--primary-900);
  }
} */

@media (max-width: 768px) {
  .testimonial-content p {
    font-size: 1rem;
  }

  .testimonial-card {
    padding: var(--space-6);
  }
}
</style>
