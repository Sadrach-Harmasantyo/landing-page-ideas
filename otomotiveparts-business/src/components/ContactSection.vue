<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const formStatus = ref({
  submitted: false,
  success: false,
  message: "",
});

const submitForm = () => {
  // Simulate form submission
  formStatus.value.submitted = true;
  formStatus.value.success = true;
  formStatus.value.message =
    "Thank you for your message! Our team will contact you shortly.";

  // Reset form after submission
  setTimeout(() => {
    formData.value = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    // Hide success message after a few seconds
    setTimeout(() => {
      formStatus.value.submitted = false;
    }, 5000);
  }, 500);
};
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>Get in touch with our team for inquiries or support</p>
      </div>

      <div class="contact-container">
        <div class="contact-info" data-aos="fade-right">
          <div class="info-card">
            <h3>Our Information</h3>
            <div class="info-item">
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <div>
                <h4>Main Location</h4>
                <p>Pantai Kapuk Street No 23, North Jakarta</p>
              </div>
            </div>
            <div class="info-item">
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <div>
                <h4>Phone Number</h4>
                <p>(+62) 123-456-7890</p>
              </div>
            </div>
            <div class="info-item">
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <div>
                <h4>Email Address</h4>
                <p>info@autopartspro.com</p>
              </div>
            </div>
            <div class="info-item">
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div class="social-links">
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2a10 10 0 0 0-3.16.5 6 6 0 0 0-2.12 1.4 6 6 0 0 0-1.4 2.1A10 10 0 0 0 5 9.2v5.6a10 10 0 0 0 .5 3.16 6 6 0 0 0 1.4 2.12 6 6 0 0 0 2.1 1.4A10 10 0 0 0 12 22a10 10 0 0 0 3.16-.5 6 6 0 0 0 2.12-1.4 6 6 0 0 0 1.4-2.1 10 10 0 0 0 .5-3.16V9.2a10 10 0 0 0-.5-3.16 6 6 0 0 0-1.4-2.12 6 6 0 0 0-2.1-1.4A10 10 0 0 0 12 2Zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                  />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                  />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form" data-aos="fade-left">
          <div class="form-container">
            <h3>Send Us a Message</h3>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  required
                  placeholder="John Doe"
                />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="formData.phone"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="formData.subject"
                  required
                  placeholder="Product Inquiry"
                />
              </div>

              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  required
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div
                v-if="formStatus.submitted"
                class="form-message"
                :class="{ success: formStatus.success }"
              >
                {{ formStatus.message }}
              </div>

              <button type="submit" class="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: white;
}

.section-title p {
  text-align: center;
  max-width: 600px;
  margin: 20px auto 50px;
  color: var(--neutral-600);
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-8);
}

.info-card {
  background-color: var(--primary-900);
  color: white;
  padding: var(--space-8);
  border-radius: var(--border-radius);
  height: 100%;
}

.info-card h3 {
  color: white;
  margin-bottom: var(--space-10);
  font-size: 1.5rem;
  position: relative;
}

.info-card h3:after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--accent-500);
}

.info-item {
  display: flex;
  margin-bottom: var(--space-6);
}

.info-item .icon {
  margin-right: var(--space-4);
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-item .icon svg {
  width: 24px;
  height: 24px;
  color: var(--accent-300);
}

.social-links {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
}

.social-links a svg {
  width: 20px;
  height: 20px;
}

.social-links a:hover {
  background-color: var(--accent-500);
  transform: translateY(-3px);
}

.form-container {
  background-color: var(--neutral-50);
  padding: var(--space-8);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.form-container h3 {
  margin-bottom: var(--space-8);
  font-size: 1.5rem;
  position: relative;
}

.form-container h3:after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--primary-600);
}

.form-group {
  margin-bottom: var(--space-4);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

label {
  display: block;
  margin-bottom: var(--space-2);
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--neutral-300);
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: white;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(18, 115, 255, 0.2);
}

textarea {
  resize: vertical;
}

button[type="submit"] {
  width: 100%;
  padding: 12px;
  margin-top: var(--space-4);
  font-size: 1rem;
}

.form-message {
  padding: var(--space-3);
  border-radius: var(--border-radius);
  margin-bottom: var(--space-4);
  background-color: var(--error-500);
  color: white;
}

.form-message.success {
  background-color: var(--success-500);
}

/* @media (prefers-color-scheme: dark) {
  .contact-section {
    background-color: var(--neutral-900);
  }

  .section-title p {
    color: var(--neutral-400);
  }

  .form-container {
    background-color: var(--neutral-800);
  }

  input,
  textarea {
    background-color: var(--neutral-700);
    border-color: var(--neutral-600);
    color: white;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--neutral-400);
  }
} */

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
