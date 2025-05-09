<script setup lang="ts">
const services = [
  {
    id: 1,
    title: 'General Dentistry',
    description: 'Comprehensive dental care including check-ups, cleanings, and preventive treatments to maintain your oral health.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    image: 'https://images.pexels.com/photos/3845741/pexels-photo-3845741.jpeg'
  },
  {
    id: 2,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our cosmetic services including teeth whitening, veneers, and smile makeovers.',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    image: 'https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg'
  },
  {
    id: 3,
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern orthodontic treatments including Invisalign and traditional braces.',
    icon: 'M4 6h16M4 12h16m-7 6h7',
    image: 'https://images.pexels.com/photos/3779702/pexels-photo-3779702.jpeg'
  },
  {
    id: 4,
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a comfortable, child-friendly environment.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    image: 'https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg'
  },
  {
    id: 5,
    title: 'Oral Surgery',
    description: 'Expert surgical procedures including extractions, implants, and reconstructive surgery.',
    icon: 'M18 20a2 2 0 002-2V6a2 2 0 00-2-2h-2M4 4v16M4 4H2v16h2M4 4h10M14 4v16',
    image: 'https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg'
  },
  {
    id: 6,
    title: 'Emergency Dental Care',
    description: 'Immediate dental care for urgent issues like toothaches, broken teeth, or injuries.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg'
  }
]
</script>

<template>
  <section id="services" class="section-padding bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title" data-aos="fade-up">Our Dental Services</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          We provide comprehensive dental care with the latest technology and techniques to ensure your comfort and satisfaction.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" class="card group" data-aos="fade-up" data-aos-delay="150">
          <div class="h-48 overflow-hidden">
            <img :src="service.image" :alt="service.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div class="p-6">
            <div class="rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-neutral-800">{{ service.title }}</h3>
            <p class="text-neutral-600 mb-4">{{ service.description }}</p>
            <a href="#contact" class="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>