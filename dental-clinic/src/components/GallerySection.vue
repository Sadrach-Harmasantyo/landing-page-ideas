<script setup lang="ts">
import { ref } from "vue";

const galleryItems = [
  {
    id: 1,
    title: "Teeth Whitening",
    before:
      "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg",
    after: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg",
    description:
      "Professional teeth whitening treatment that removes stains and discoloration.",
  },
  {
    id: 2,
    title: "Dental Implants",
    before:
      "https://images.pexels.com/photos/3845743/pexels-photo-3845743.jpeg",
    after: "https://images.pexels.com/photos/3762504/pexels-photo-3762504.jpeg",
    description:
      "Replacement of missing teeth with dental implants for a natural look and feel.",
  },
  {
    id: 3,
    title: "Smile Makeover",
    before:
      "https://images.pexels.com/photos/4270365/pexels-photo-4270365.jpeg",
    after: "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg",
    description:
      "Complete smile transformation with a combination of cosmetic treatments.",
  },
];

const selectedGalleryItem = ref(galleryItems[0]);

const selectGalleryItem = (item: any) => {
  selectedGalleryItem.value = item;
};
</script>

<template>
  <section id="gallery" class="section-padding">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title" data-aos="fade-up">Smile Transformations</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          See the remarkable difference our dental care has made in our
          patients' smiles.
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col md:flex-row gap-8 mb-12">
          <div data-aos="fade-right" class="w-full md:w-1/2">
            <div class="relative rounded-lg overflow-hidden shadow-xl">
              <div
                class="absolute top-0 left-0 bg-primary-500 text-white z-10 px-4 py-2 rounded-br-lg font-medium"
              >
                Before
              </div>
              <img
                :src="selectedGalleryItem.before"
                :alt="`Before ${selectedGalleryItem.title}`"
                class="w-full h-80 object-cover"
              />
            </div>
          </div>
          <div data-aos="fade-left" class="w-full md:w-1/2">
            <div class="relative rounded-lg overflow-hidden shadow-xl">
              <div
                class="absolute top-0 left-0 bg-secondary-500 text-white z-10 px-4 py-2 rounded-br-lg font-medium"
              >
                After
              </div>
              <img
                :src="selectedGalleryItem.after"
                :alt="`After ${selectedGalleryItem.title}`"
                class="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-up" class="text-center mb-12">
          <h3 class="text-2xl font-bold mb-2">
            {{ selectedGalleryItem.title }}
          </h3>
          <p class="text-neutral-600">{{ selectedGalleryItem.description }}</p>
        </div>

        <div data-aos="fade-up" class="flex justify-center space-x-4">
          <button
            v-for="item in galleryItems"
            :key="item.id"
            @click="selectGalleryItem(item)"
            :class="[
              'px-4 py-2 rounded-lg transition-all duration-200',
              selectedGalleryItem.id === item.id
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
            ]"
          >
            {{ item.title }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
