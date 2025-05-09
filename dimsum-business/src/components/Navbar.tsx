import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOrderOnline = () => {
    const waNumber = "6281234567890"; // Replace with your WhatsApp number
    const message = "Hello, I would like to order some dim sum!"; // Optional default message
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  // Add smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      // Get the navbar height to offset the scroll position
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      // Calculate the position to scroll to
      const offsetTop = section.offsetTop - navbarHeight;
      
      // Smooth scroll to the section
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-dimsum">
            Dim Sum Delight
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#home"
            className="font-medium hover:text-dimsum transition-colors"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#about"
            className="font-medium hover:text-dimsum transition-colors"
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a
            href="#menu"
            className="font-medium hover:text-dimsum transition-colors"
            onClick={(e) => handleNavClick(e, 'menu')}
          >
            Menu
          </a>
          <a
            href="#location"
            className="font-medium hover:text-dimsum transition-colors"
            onClick={(e) => handleNavClick(e, 'location')}
          >
            Location
          </a>
          <a
            href="#contact"
            className="font-medium hover:text-dimsum transition-colors"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
          <Button
            onClick={handleOrderOnline}
            className="bg-dimsum hover:bg-dimsum-dark text-white"
          >
            Order Online
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 absolute w-full border-b border-gray-100 shadow-md animate-fade-in">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              className="font-medium py-2 hover:text-dimsum transition-colors"
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
            <a
              href="#about"
              className="font-medium py-2 hover:text-dimsum transition-colors"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
            <a
              href="#menu"
              className="font-medium py-2 hover:text-dimsum transition-colors"
              onClick={(e) => handleNavClick(e, 'menu')}
            >
              Menu
            </a>
            <a
              href="#location"
              className="font-medium py-2 hover:text-dimsum transition-colors"
              onClick={(e) => handleNavClick(e, 'location')}
            >
              Location
            </a>
            <a
              href="#contact"
              className="font-medium py-2 hover:text-dimsum transition-colors"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
            <Button
              onClick={handleOrderOnline}
              className="bg-dimsum hover:bg-dimsum-dark text-white"
            >
              Order Online
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
