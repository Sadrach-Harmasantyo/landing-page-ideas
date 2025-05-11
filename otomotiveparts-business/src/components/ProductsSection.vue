<script setup lang="ts">
import { ref } from "vue";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Performance Engine Parts",
    description:
      "High-quality components designed to enhance your engine's performance and durability.",
    imageUrl:
      "https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$149.99+",
    category: "Engine",
  },
  {
    id: 2,
    name: "Premium Brake Systems",
    description:
      "Advanced braking solutions for optimal stopping power and safety in all conditions.",
    imageUrl:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    price: "$89.99+",
    category: "Brakes",
  },
  {
    id: 3,
    name: "Suspension Components",
    description:
      "Engineered for perfect handling, comfort, and control on any road surface.",
    imageUrl:
      "https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$129.99+",
    category: "Suspension",
  },
  {
    id: 4,
    name: "Electrical Systems",
    description:
      "Reliable electrical components to keep your vehicle's systems functioning perfectly.",
    imageUrl:
      "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$59.99+",
    category: "Electrical",
  },
  {
    id: 5,
    name: "Performance Exhaust Systems",
    description:
      "Boost performance and enhance sound with our premium exhaust systems designed for maximum flow.",
    imageUrl:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    price: "$199.99+",
    category: "Exhaust",
  },
  {
    id: 6,
    name: "Advanced Cooling Systems",
    description:
      "Keep your engine running at optimal temperature with our high-efficiency cooling components.",
    imageUrl:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    price: "$89.99+",
    category: "Cooling",
  },
  {
    id: 7,
    name: "Precision Steering Components",
    description:
      "Experience superior control and handling with our precision-engineered steering parts.",
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    price: "$109.99+",
    category: "Steering",
  },
  {
    id: 8,
    name: "High-Performance Filters",
    description:
      "Maximize airflow and protect your engine with our premium filtration solutions.",
    imageUrl:
      "https://images.unsplash.com/photo-1537984822441-cff330075342?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    price: "$39.99+",
    category: "Filtration",
  },
  {
    id: 9,
    name: "Premium Lighting Systems",
    description:
      "Enhance visibility and style with our advanced automotive lighting solutions.",
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    price: "$79.99+",
    category: "Lighting",
  },
];

const showAllProducts = ref(false);
const displayedProducts = ref(products.slice(0, 6));

const viewAllProducts = () => {
  showAllProducts.value = true;
  displayedProducts.value = products;
};
</script>

<template>
  <section id="products" class="section products-section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Our Premium Products</h2>
        <p>Discover top-quality automotive parts for every need</p>
      </div>

      <div class="product-categories">
        <div class="product-grid">
          <div
            v-for="product in displayedProducts"
            :key="product.id"
            class="product-card"
            data-aos="fade-up"
            :data-aos-delay="product.id * 100"
          >
            <div class="product-image">
              <img :src="product.imageUrl" :alt="product.name" />
              <div class="category-tag">{{ product.category }}</div>
            </div>
            <div class="product-details">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="product-footer">
                <span class="price">{{ product.price }}</span>
                <button class="view-btn">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="view-all-container" data-aos="fade-up">
        <button
          v-if="!showAllProducts"
          @click="viewAllProducts"
          class="btn btn-primary"
        >
          View All Products
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products-section {
  background-color: var(--neutral-100);
}

.section-title p {
  text-align: center;
  max-width: 600px;
  margin: 20px auto 50px;
  color: var(--neutral-600);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-6);
}

.product-card {
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.product-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

.category-tag {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background-color: var(--accent-600);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.product-details {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-details h3 {
  margin-bottom: var(--space-3);
  font-size: 1.25rem;
}

.product-details p {
  color: var(--neutral-600);
  margin-bottom: var(--space-4);
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: justify;
  flex-grow: 1;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.price {
  font-weight: 700;
  color: var(--primary-700);
  font-size: 1.1rem;
}

.view-btn {
  background-color: transparent;
  color: var(--primary-600);
  border: 1px solid var(--primary-600);
  padding: 6px 15px;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.view-btn:hover {
  background-color: var(--primary-600);
  color: white;
}

.view-all-container {
  margin-top: var(--space-12);
  text-align: center;
}

/* @media (prefers-color-scheme: dark) {
  .products-section {
    background-color: var(--neutral-900);
  }

  .section-title p {
    color: var(--neutral-400);
  }

  .product-card {
    background-color: var(--neutral-800);
  }

  .product-details p {
    color: var(--neutral-400);
  }
} */

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
