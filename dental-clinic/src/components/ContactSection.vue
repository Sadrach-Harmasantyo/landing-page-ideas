<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const services = [
  "General Check-up",
  "Teeth Whitening",
  "Dental Implants",
  "Orthodontics",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
  "Other",
];

const isSubmitted = ref(false);
const isLoading = ref(false);

const submitForm = () => {
  isLoading.value = true;
  // Simulate form submission
  setTimeout(() => {
    isLoading.value = false;
    isSubmitted.value = true;
    form.value = {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    };
  }, 1500);
};
</script>

<template>
  <section id="contact" class="section-padding">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title" data-aos="fade-up">Contact Us</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Reach out to schedule your appointment or ask any questions you may
          have.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div data-aos="fade-right">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-6 text-neutral-800">
                Our Location
              </h3>

              <!-- Contact Details -->
              <div class="space-y-6 mb-8">
                <div class="flex items-start space-x-4">
                  <div
                    class="rounded-full bg-primary-100 w-10 h-10 flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div class="flex flex-col gap-2 w-full">
                    <h4 class="font-bold text-neutral-800">Address</h4>
                    <p class="text-neutral-600">
                      Malioboro Street No 45, Keraton District<br />Yogyakarta,
                      D.I Yogyakarta
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="rounded-full bg-primary-100 w-10 h-10 flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-neutral-800">Phone</h4>
                    <p class="text-neutral-600">(+62) 123-456-7890</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="rounded-full bg-primary-100 w-10 h-10 flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-neutral-800">Email</h4>
                    <p class="text-neutral-600">info@dentalcare.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="rounded-full bg-primary-100 w-10 h-10 flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-neutral-800">Hours</h4>
                    <p class="text-neutral-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <!-- Social Media Links -->
              <div>
                <h4 class="font-bold text-neutral-800 mb-4">Follow Us</h4>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="bg-primary-100 text-primary-500 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="bg-primary-100 text-primary-500 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="bg-primary-100 text-primary-500 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="bg-primary-100 text-primary-500 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Google Maps Embed -->
              <div class="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8366775207!2d110.36309867462567!3d-7.801406177442171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5796db768461%3A0xb9f22f6d5f1bdc51!2sJl.%20Malioboro%2C%20Sosromenduran%2C%20Gedong%20Tengen%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sen!2sid!4v1716121234567!5m2!1sen!2sid"
                  width="100%"
                  height="200"
                  style="border: 0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h3 class="text-2xl font-bold mb-6 text-neutral-800">
              Book an Appointment
            </h3>

            <div
              v-if="isSubmitted"
              class="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 mx-auto text-green-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 class="text-xl font-bold text-green-800 mb-2">
                Request Received!
              </h4>
              <p class="text-green-700">
                Thank you for contacting us. We will get back to you shortly to
                confirm your appointment.
              </p>
            </div>

            <form v-else @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-neutral-700 mb-1"
                  >Full Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-neutral-700 mb-1"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-neutral-700 mb-1"
                    >Phone Number</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  for="service"
                  class="block text-sm font-medium text-neutral-700 mb-1"
                  >Preferred Service</label
                >
                <select
                  id="service"
                  v-model="form.service"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none transition-colors appearance-none bg-white bg-no-repeat pr-10"
                  style="
                    background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23666%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>');
                    background-position: right 12px center;
                    background-size: 16px;
                  "
                >
                  <option value="" disabled>Select a service</option>
                  <option
                    v-for="service in services"
                    :key="service"
                    :value="service"
                  >
                    {{ service }}
                  </option>
                </select>
              </div>

              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-neutral-700 mb-1"
                  >Your Message</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="10"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full btn btn-primary text-center py-4"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="flex items-center justify-center">
                  <svg
                    class="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
                <span v-else>Book Your Appointment</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
