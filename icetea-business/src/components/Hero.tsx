import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll(".parallax");

      parallaxElements.forEach((element, index) => {
        const speed = 0.1 + index * 0.05;
        (element as HTMLElement).style.transform = `translateY(${
          scrollPosition * speed
        }px)`;
      });
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <div
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl parallax"></div>
        <div className="absolute top-[40%] left-[5%] w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl parallax"></div>
        <div className="absolute bottom-[5%] right-[25%] w-72 h-72 bg-blue-300/10 rounded-full blur-3xl parallax"></div>
      </div>

      {/* Overlay with wave pattern */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gray-50 rotate-180"
        style={{
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'%3E%3C/path%3E%3C/svg%3E\")",
          maskSize: "cover",
          WebkitMaskImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'%3E%3C/path%3E%3C/svg%3E\")",
          WebkitMaskSize: "cover",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Refresh Your Day</span>
              <span className="block mt-2 text-yellow-300">
                One Sip at a Time
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-lg">
              Discover our premium ice tea collection, crafted with organic
              ingredients and innovative flavors that elevate your refreshment
              experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#flavors"
                className="bg-white text-emerald-800 hover:bg-gray-100 px-6 py-3 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-xl duration-300"
              >
                Explore Flavors
              </a>
              <a
                href="#locations"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full text-base font-medium transition-all duration-300"
              >
                Find a Store
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-start">
            <img
              src="https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwdGVhfGVufDB8fDB8fHww"
              alt="Refreshing Ice Tea"
              className="mx-auto object-cover object-center relative z-10 w-full max-h-[70vh] overflow-hidden rounded-2xl shadow-md hover:shadow-xl duration-500 hover:-translate-y-4 transition-all"
            />

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 rounded-full blur-md"></div>
            <div className="absolute bottom-0 -right-6 w-32 h-32 bg-yellow-300/30 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
