import { Button } from "./ui/button";

const HeroSection = () => {
  const handleOrderOnline = () => {
    const waNumber = "6281234567890"; // Replace with your WhatsApp number
    const message = "Hello, I would like to reserve a table"; // Optional default message
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      // Get the navbar height to offset the scroll position
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      // Calculate the position to scroll to
      const offsetTop = section.offsetTop - navbarHeight;

      // Smooth scroll to the section
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1557869458-63870977545f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGltc3VtfGVufDB8fDB8fHww")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 text-shadow animate-fade-in">
            Authentic Dim Sum Experience
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Hand-crafted dim sum made fresh daily with authentic recipes passed
            down through generations
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              onClick={handleOrderOnline}
              className="bg-dimsum hover:bg-dimsum-dark text-white text-lg px-8 py-6"
            >
              Reserve a Table
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={() => scrollToSection("menu")}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="w-8 h-8 border-l-2 border-b-2 border-white rotate-[-45deg]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
