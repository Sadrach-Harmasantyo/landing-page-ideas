import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import LocationSection from "../components/LocationSection";
import MenuSection from "../components/MenuSection";
import Navbar from "../components/Navbar";
import TestimonialSection from "../components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <LocationSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  );
};

export default Index;
