<script setup lang="ts">
interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
          </svg>`,
    title: "Expert Consultations",
    description:
      "Our team of automotive experts can help you find the right parts for your specific vehicle and needs.",
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>`,
    title: "Fast Worldwide Shipping",
    description:
      "Enjoy quick delivery to any location with our reliable shipping partners and real-time tracking.",
  },
  {
    id: 3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>`,
    title: "Easy Returns & Exchanges",
    description:
      "Not the right fit? Our hassle-free return policy ensures you're always satisfied with your purchase.",
  },
  {
    id: 4,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>`,
    title: "Extended Warranty",
    description:
      "Every product comes with an industry-leading warranty for your peace of mind and protection.",
  },
  {
    id: 5,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>`,
    title: "24/7 Customer Support",
    description:
      "Our dedicated team is available around the clock to assist with any questions or concerns.",
  },
  {
    id: 6,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>`,
    title: "Price Match Guarantee",
    description:
      "Found it cheaper elsewhere? We'll match the price to ensure you get the best deal possible.",
  },
];
</script>

<template>
  <section id="services" class="section services-section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>
          Delivering quality service and support for all your automotive needs
        </p>
      </div>

      <div class="services-grid">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card"
          data-aos="fade-up"
          :data-aos-delay="service.id * 100"
        >
          <div class="service-icon" v-html="service.icon"></div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>

      <div class="service-cta" data-aos="fade-up">
        <div class="cta-content">
          <h3>Need Custom Parts or Special Orders?</h3>
          <p>
            Contact our team for personalized solutions tailored to your
            specific requirements.
          </p>
          <a href="#contact" class="btn btn-accent">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background-color: white;
}

.section-title p {
  text-align: center;
  max-width: 600px;
  margin: 20px auto 50px;
  color: var(--neutral-600);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-8);
  margin-bottom: var(--space-16);
}

.service-card {
  text-align: center;
  padding: var(--space-8);
  border-radius: var(--border-radius);
  background-color: var(--neutral-50);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow);
}

.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin: 0 auto var(--space-4);
  background-color: var(--primary-100);
  border-radius: 50%;
  color: var(--primary-600);
  padding: var(--space-2);
}

.service-icon svg {
  width: 40px;
  height: 40px;
}

.service-card h3 {
  margin-bottom: var(--space-3);
  font-size: 1.25rem;
}

.service-card p {
  color: var(--neutral-600);
  font-size: 0.95rem;
  line-height: 1.6;
}

.service-cta {
  background-color: var(--primary-800);
  border-radius: var(--border-radius-lg);
  padding: var(--space-10);
  text-align: center;
  color: white;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h3 {
  color: white;
  margin-bottom: var(--space-4);
  font-size: 1.75rem;
}

.cta-content p {
  margin-bottom: var(--space-6);
  font-size: 1.1rem;
  color: var(--neutral-200);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-cta {
    padding: var(--space-6);
  }

  .cta-content h3 {
    font-size: 1.5rem;
  }

  .cta-content p {
    font-size: 1rem;
  }
}
</style>
