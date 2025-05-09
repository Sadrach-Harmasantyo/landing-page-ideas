<script setup lang="ts">
import { ref } from "vue";

const faqs = [
  {
    id: 1,
    question: "How often should I visit the dentist?",
    answer:
      "For most patients, we recommend a dental check-up and professional cleaning every six months. However, some patients might need more frequent visits depending on their oral health needs. Your dentist will recommend the appropriate schedule for you.",
  },
  {
    id: 2,
    question: "What should I do in a dental emergency?",
    answer:
      "If you experience a dental emergency such as severe pain, a knocked-out tooth, or a broken tooth, contact our office immediately. We reserve time in our daily schedules for emergency patients. For after-hours emergencies, please call our emergency number provided on our contact page.",
  },
  {
    id: 3,
    question: "How can I improve my smile?",
    answer:
      "We offer a variety of cosmetic dental treatments to enhance your smile, including teeth whitening, veneers, bonding, and Invisalign. During a consultation, your dentist will evaluate your oral health and discuss the best options to achieve your desired smile.",
  },
  {
    id: 4,
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Our administrative team will help you understand your coverage and maximize your benefits. We also offer payment plans for those without insurance or for treatments not fully covered.",
  },
  {
    id: 5,
    question: "Are dental X-rays safe?",
    answer:
      "Dental X-rays involve a very small dose of radiation. We use digital X-rays which reduce radiation exposure by up to 90% compared to traditional film X-rays. We also provide protective equipment and only take X-rays when necessary for diagnostic purposes.",
  },
  {
    id: 6,
    question: "At what age should children start seeing a dentist?",
    answer:
      "The American Academy of Pediatric Dentistry recommends that children have their first dental visit by their first birthday or when their first tooth appears. Early dental visits help establish good oral hygiene habits and can prevent future dental problems.",
  },
];

const openFaq = ref<number | null>(null);

const toggleFaq = (id: number | null) => {
  if (openFaq.value === id) {
    openFaq.value = null;
  } else {
    openFaq.value = id;
  }
};
</script>

<template>
  <section id="faq" class="section-padding bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Find answers to common questions about dental care and our services.
        </p>
      </div>

      <div class="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        <div v-for="faq in faqs" :key="faq.id" class="mb-4">
          <button
            @click="toggleFaq(faq.id)"
            class="w-full text-left bg-white p-5 rounded-lg shadow-sm flex justify-between items-center hover:shadow-md transition-shadow"
            :class="{
              'bg-primary-50 rounded-b-none': openFaq === faq.id,
            }"
          >
            <span class="font-bold text-lg">{{ faq.question }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-primary-500 transition-transform duration-300"
              :class="{ 'transform rotate-180': openFaq === faq.id }"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            v-if="openFaq === faq.id"
            class="bg-white p-5 rounded-b-lg border-gray-100 text-neutral-600 shadow-sm"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12" data-aos="fade-up">
        <p class="mb-4 text-neutral-700">Still have questions?</p>
        <a href="#contact" class="btn btn-primary">Contact Us</a>
      </div>
    </div>
  </section>
</template>
