import React, { useState, useEffect } from "react";
import { testimonials } from "../data/testimonials";
import { flavors } from "../data/flavors";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];
  const activeFlavor = flavors.find((f) => f.id === activeTestimonial.flavorId);

  // const getRandomOffset = () => {
  //   return Math.floor(Math.random() * 60) - 30;
  // };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 overflow-hidden relative"
    >
      {/* Floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              backgroundColor: flavors[i % flavors.length].color,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 20 + 15
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our <span className="text-emerald-600">Customers Say</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the people who've made
            PureLeaf a part of their daily routine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial slides */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="min-h-[400px] p-6 sm:p-8 md:p-10 relative flex flex-col md:flex-row items-center">
                <div
                  className={`md:w-1/3 flex justify-center mb-6 md:mb-0 transition-opacity duration-500 ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-full opacity-20"
                      style={{ backgroundColor: activeFlavor?.color }}
                    ></div>
                    <img
                      src={activeTestimonial.imageUrl}
                      alt={activeTestimonial.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-white shadow-md"
                    />
                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-1">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div
                  className={`md:w-2/3 md:pl-8 transition-all duration-500 ${
                    isAnimating
                      ? "opacity-0 translate-x-10"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  <blockquote className="text-gray-700 italic text-lg">
                    "{activeTestimonial.quote}"
                  </blockquote>

                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {activeTestimonial.name}
                      </div>
                      <div className="text-emerald-600 text-sm">
                        {activeTestimonial.role}
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-0 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center">
                    <span
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: activeFlavor?.color }}
                    ></span>
                    <span className="text-sm text-gray-600">
                      Favorite flavor:{" "}
                      <span className="font-medium">{activeFlavor?.name}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-emerald-500 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="hidden sm:block">
              <button
                onClick={handlePrev}
                className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors -mx-10 duration-300"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors -mx-10 duration-300"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
