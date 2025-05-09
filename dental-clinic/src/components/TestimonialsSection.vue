<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Anderson",
    position: "Marketing Director",
    testimonial:
      "I've been a patient at DentalCare for over 5 years. Their attention to detail and gentle approach have made my dental visits something I no longer dread. Dr. Johnson and her team are simply the best!",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 2,
    name: "Robert Thompson",
    position: "Software Engineer",
    testimonial:
      "After putting off dental care for years due to anxiety, I finally found DentalCare. Their patient-centered approach and state-of-the-art technology made all the difference. My smile has never looked better!",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    id: 3,
    name: "Lisa Martinez",
    position: "Elementary School Teacher",
    testimonial:
      "As a teacher who speaks all day, having a healthy smile is important to me. The team at DentalCare has helped me maintain excellent oral health, and their flexible scheduling makes it easy to fit appointments into my busy schedule.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    id: 4,
    name: "Michael Williams",
    position: "Financial Advisor",
    testimonial:
      "The Invisalign treatment I received at DentalCare has transformed my smile and boosted my confidence. Dr. Chen's expertise guided me through the entire process with excellent results. I highly recommend their services!",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
];

const carouselSettings = {
  itemsToShow: 1,
  snapAlign: "center" as const,
};
</script>

<template>
  <section id="testimonials" class="section-padding bg-primary-500 text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title text-white" data-aos="fade-up">
          Patient Testimonials
        </h2>
        <p
          class="section-subtitle text-primary-100"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hear what our satisfied patients have to say about their experience at
          DentalCare.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Carousel
          v-bind="carouselSettings"
          :wrapAround="true"
          :autoplay="5000"
          class="max-w-4xl mx-auto"
        >
          <Slide v-for="testimonial in testimonials" :key="testimonial.id">
            <div
              class="p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl"
            >
              <div
                class="flex flex-col md:flex-row items-center md:items-start gap-6"
              >
                <img
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  class="w-24 h-24 object-cover rounded-full"
                />
                <div class="text-center md:text-left">
                  <div
                    class="flex items-center justify-center md:justify-start mb-2"
                  >
                    <span
                      v-for="i in 5"
                      :key="i"
                      class="text-yellow-300 mx-0.5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          v-if="i <= testimonial.rating"
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                        <path
                          v-else
                          fill-rule="evenodd"
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <p class="text-lg italic mb-4">
                    "{{ testimonial.testimonial }}"
                  </p>
                  <h3 class="font-bold text-xl">{{ testimonial.name }}</h3>
                  <p class="text-primary-200">{{ testimonial.position }}</p>
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<style>
.carousel__slide {
  padding: 0 5rem;
}

.carousel__prev,
.carousel__next {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.carousel__pagination-button {
  background-color: rgba(255, 255, 255, 0.3);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 4px;
  transition: all 0.3s;
  /* Reset any default styles that might be causing the issue */
  border: none;
  padding: 0;
  box-shadow: none;
  position: relative;
  overflow: hidden;
}

.carousel__pagination-button::after {
  content: "";
  display: none;
}

.carousel__pagination-button--active {
  background-color: white;
  width: 10px;
  height: 10px;
  /* Ensure no default styling is interfering */
  border: none;
  box-shadow: none;
}
</style>
