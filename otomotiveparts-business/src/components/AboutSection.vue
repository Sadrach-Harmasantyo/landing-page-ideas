<script setup lang="ts">
interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "Founder & CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "alex@autopartspro.com",
    },
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Technical Director",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@autopartspro.com",
    },
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    position: "Head of Operations",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "michael@autopartspro.com",
    },
  },
];

const companyStats = [
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Products" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Support" },
];
</script>

<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>About AutoPartsPro</h2>
        <p>Your trusted partner in automotive excellence since 2008</p>
      </div>

      <div class="about-content">
        <div class="about-text" data-aos="fade-right">
          <h3>Our Story</h3>
          <p>
            Founded with a passion for automotive excellence, AutoPartsPro has
            grown from a small local shop to a leading provider of premium
            automotive parts nationwide. Our journey began with a simple
            mission: to provide high-quality parts that enhance vehicle
            performance and reliability.
          </p>
          <p>
            Today, we continue to uphold that commitment by sourcing the finest
            components from trusted manufacturers and delivering exceptional
            service to our customers. Our team of automotive experts brings
            decades of combined experience to help you find the perfect parts
            for your specific needs.
          </p>

          <div class="company-stats">
            <div
              v-for="(stat, index) in companyStats"
              :key="index"
              class="stat-item"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="about-image" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80"
            alt="AutoPartsPro workshop"
          />
        </div>
      </div>

      <div class="team-section">
        <h3 data-aos="fade-up">Meet Our Leadership Team</h3>

        <div class="team-grid">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="team-card"
            data-aos="fade-up"
            :data-aos-delay="member.id * 100"
          >
            <div class="member-image">
              <img :src="member.imageUrl" :alt="member.name" />
            </div>
            <div class="member-info">
              <h4>{{ member.name }}</h4>
              <p>{{ member.position }}</p>
              <div class="social-links">
                <a
                  v-if="member.socialLinks.linkedin"
                  :href="member.socialLinks.linkedin"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    ></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  v-if="member.socialLinks.twitter"
                  :href="member.socialLinks.twitter"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    ></path>
                  </svg>
                </a>
                <a
                  v-if="member.socialLinks.email"
                  :href="`mailto:${member.socialLinks.email}`"
                  aria-label="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--neutral-50);
}

.section-title p {
  text-align: center;
  max-width: 600px;
  margin: 20px auto 50px;
  color: var(--neutral-600);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-16);
  align-items: center;
}

.about-text h3 {
  font-size: 1.75rem;
  margin-bottom: var(--space-4);
  color: var(--primary-800);
}

.about-text p {
  color: var(--neutral-700);
  margin-bottom: var(--space-4);
  font-size: 1rem;
  line-height: 1.7;
  text-align: justify;
}

.company-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-8);
}

.stat-item {
  text-align: center;
  padding: var(--space-4);
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-700);
  margin-bottom: var(--space-1);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--neutral-600);
}

.about-image {
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

.team-section {
  margin-top: var(--space-16);
}

.team-section h3 {
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: var(--space-10);
  color: var(--primary-800);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-8);
}

.team-card {
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.member-image {
  height: 280px;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.5s ease;
}

.team-card:hover .member-image img {
  transform: scale(1.1);
}

.member-info {
  padding: var(--space-6);
  text-align: center;
}

.member-info h4 {
  font-size: 1.25rem;
  margin-bottom: var(--space-1);
  color: var(--primary-800);
}

.member-info p {
  color: var(--neutral-600);
  margin-bottom: var(--space-4);
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--primary-100);
  color: var(--primary-600);
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: var(--primary-600);
  color: white;
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-image {
    order: -1;
    margin-bottom: var(--space-8);
  }

  .company-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
  }

  .company-stats {
    grid-template-columns: 1fr;
  }
}
</style>
