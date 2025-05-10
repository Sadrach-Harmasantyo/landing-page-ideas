import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FlavorsShowcase from "./components/FlavorsShowcase";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Update page title
    document.title = "PureLeaf - Premium Organic Ice Tea";

    // Modify favicon with emerald-600 color
    const favicon = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement;
    if (favicon) {
      // Using SVG with emerald-600 color (#059669)
      const svgIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        </svg>
      `;
      const encodedData = encodeURIComponent(svgIcon);
      favicon.href = `data:image/svg+xml,${encodedData}`;
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FlavorsShowcase />
        <Features />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
