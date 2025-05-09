<script setup lang="ts">
const features = [
  {
    id: 1,
    title: 'State-of-the-Art Technology',
    description: 'We utilize the latest dental technology for precise diagnostics and treatment.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    id: 2,
    title: 'Comfortable Environment',
    description: 'Our clinic is designed to make your dental visits relaxing and stress-free.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    id: 3,
    title: 'Personalized Care',
    description: 'We develop customized treatment plans tailored to your unique dental needs.',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  {
    id: 4,
    title: 'Preventive Approach',
    description: 'We focus on preventive care to maintain your oral health and prevent future problems.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  }
]
</script>

<template>
  <section id="about" class="section-padding">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <div class="relative">
            <img src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg" alt="About our dental clinic" 
              class="rounded-lg shadow-xl w-full h-auto" />
            <div class="absolute -bottom-6 -right-6 bg-primary-500 rounded-lg p-4 text-white shadow-lg hidden md:block">
              <p class="text-lg font-bold">15+ Years of Excellence</p>
            </div>
          </div>
        </div>
        
        <div data-aos="fade-left">
          <h2 class="section-title">About Our Dental Clinic</h2>
          <p class="text-neutral-600 mb-6">
            Founded in 2008, DentalCare has been providing exceptional dental services to our community for over 15 years. 
            Our mission is to deliver the highest quality dental care in a comfortable and welcoming environment.
          </p>
          <p class="text-neutral-600 mb-8">
            Our team of experienced dentists and staff are dedicated to staying at the forefront of dental 
            techniques and technology to ensure you receive the best possible care. We believe in building 
            long-term relationships with our patients based on trust, transparency, and exceptional results.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div v-for="feature in features" :key="feature.id" class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="rounded-full bg-primary-100 w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-bold text-neutral-800 mb-1">{{ feature.title }}</h3>
                <p class="text-neutral-600">{{ feature.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <a href="#contact" class="btn btn-primary">Schedule a Consultation</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>