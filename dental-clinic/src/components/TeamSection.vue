<script setup lang="ts">
const team = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "General Dentist",
    bio: "Dr. Johnson brings over 12 years of experience in general dentistry with a special interest in preventive care.",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    bio: "Specializing in modern orthodontic techniques, Dr. Chen is passionate about creating beautiful smiles.",
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Cosmetic Dentist",
    bio: "Dr. Rodriguez is skilled in advanced cosmetic procedures and dedicated to aesthetic excellence.",
    image: "https://images.pexels.com/photos/5215016/pexels-photo-5215016.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 4,
    name: "Dr. David Wilson",
    role: "Oral Surgeon",
    bio: "With expertise in complex oral procedures, Dr. Wilson ensures precise and comfortable surgical care.",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
];
</script>

<template>
  <section id="team" class="section-padding bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title" data-aos="fade-up">Meet Our Expert Team</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Our skilled dental professionals are committed to providing
          exceptional care with a gentle approach.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="member in team"
          :key="member.id"
          class="card group"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div class="relative overflow-hidden">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-80 object-cover object-center"
            />
            <div
              class="absolute inset-0 bg-primary-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <div class="flex space-x-3">
                <a
                  :href="member.social.linkedin"
                  class="bg-white text-primary-500 rounded-full p-2 hover:bg-primary-500 hover:text-white transition-colors"
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
                <a
                  :href="member.social.twitter"
                  class="bg-white text-primary-500 rounded-full p-2 hover:bg-primary-500 hover:text-white transition-colors"
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
                  :href="member.social.facebook"
                  class="bg-white text-primary-500 rounded-full p-2 hover:bg-primary-500 hover:text-white transition-colors"
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
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-1 text-neutral-800">
              {{ member.name }}
            </h3>
            <p class="text-primary-500 font-medium mb-2">{{ member.role }}</p>
            <p class="text-neutral-600">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
