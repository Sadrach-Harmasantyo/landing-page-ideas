<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <div class="logo">
            <h3>AutoParts<span>Pro</span></h3>
          </div>
          <p>
            Premium automotive parts for all makes and models. Quality you can
            trust, service you can depend on.
          </p>
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

        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Product Categories</h4>
          <ul>
            <li><a href="#products">Engine Parts</a></li>
            <li><a href="#products">Brake Systems</a></li>
            <li><a href="#products">Suspension</a></li>
            <li><a href="#products">Electrical Systems</a></li>
            <li><a href="#products">Accessories</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Contact Information</h4>
          <address>
            <p>
              <strong>Address:</strong> Pantai Kapuk Streer No 23, North Jakarta
            </p>
            <p><strong>Phone:</strong> (+62) 123-456-7890</p>
            <p><strong>Email:</strong> info@autopartspro.com</p>
            <p><strong>Hours:</strong> Mon-Fri: 8am - 6pm, Sat: 9am - 4pm</p>
          </address>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 AutoPartsPro. All Rights Reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns & Refunds</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--neutral-800);
  color: var(--neutral-200);
  padding: var(--space-16) 0 var(--space-8);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-8);
  margin-bottom: var(--space-12);
}

.footer-column h4 {
  color: white;
  font-size: 1.25rem;
  margin-bottom: var(--space-6);
  position: relative;
}

.footer-column h4:after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--accent-500);
}

.logo h3 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: var(--space-4);
}

.logo span {
  color: var(--accent-500);
}

.footer-column p {
  margin-bottom: var(--space-4);
  line-height: 1.6;
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

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: var(--space-3);
}

ul a {
  color: var(--neutral-300);
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;
}

ul a:hover {
  color: var(--accent-500);
  transform: translateX(5px);
}

address {
  font-style: normal;
  line-height: 1.6;
}

address p {
  margin-bottom: var(--space-3);
}

.footer-bottom {
  border-top: 1px solid var(--neutral-700);
  padding-top: var(--space-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.footer-bottom p {
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.footer-bottom-links a {
  color: var(--neutral-400);
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: var(--accent-500);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-bottom-links {
    justify-content: center;
  }
}
</style>
