import React, { useState } from "react";
import { flavors, Flavor } from "../data/flavors";
import { ChevronRight, ChevronLeft } from "lucide-react";

const FlavorsShowcase: React.FC = () => {
  const [activeFlavor, setActiveFlavor] = useState<Flavor>(flavors[0]);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );

  const handleNext = () => {
    setSlideDirection("right");
    const currentIndex = flavors.findIndex((f) => f.id === activeFlavor.id);
    const nextIndex = (currentIndex + 1) % flavors.length;
    setTimeout(() => {
      setActiveFlavor(flavors[nextIndex]);
      setSlideDirection(null);
    }, 300);
  };

  const handlePrev = () => {
    setSlideDirection("left");
    const currentIndex = flavors.findIndex((f) => f.id === activeFlavor.id);
    const prevIndex =
      currentIndex === 0 ? flavors.length - 1 : currentIndex - 1;
    setTimeout(() => {
      setActiveFlavor(flavors[prevIndex]);
      setSlideDirection(null);
    }, 300);
  };

  const handleFlavorClick = (flavor: Flavor) => {
    if (flavor.id === activeFlavor.id) return;

    const currentIndex = flavors.findIndex((f) => f.id === activeFlavor.id);
    const newIndex = flavors.findIndex((f) => f.id === flavor.id);

    setSlideDirection(newIndex > currentIndex ? "right" : "left");
    setTimeout(() => {
      setActiveFlavor(flavor);
      setSlideDirection(null);
    }, 300);
  };

  return (
    <section id="flavors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Discover Our{" "}
            <span className="text-emerald-600">Signature Flavors</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Each flavor is meticulously crafted using premium teas and natural
            ingredients, creating a perfect balance of taste and refreshment.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Flavor Selection Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Our Collection
              </h3>
              <div className="space-y-2">
                {flavors.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => handleFlavorClick(flavor)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                      activeFlavor.id === flavor.id
                        ? "bg-emerald-50 text-emerald-700 font-medium"
                        : "hover:bg-gray-50 text-gray-700 duration-300"
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: flavor.color }}
                    ></span>
                    {flavor.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Flavor Display */}
          <div className="lg:col-span-4">
            <div
              className="bg-white rounded-2xl shadow-md overflow-hidden h-full"
              style={{
                background: `linear-gradient(135deg, ${activeFlavor.color}20, white 60%)`,
              }}
            >
              <div className="p-6 sm:p-8 h-full">
                <div className="grid md:grid-cols-2 gap-8 h-full">
                  <div
                    className={`transition-all duration-300 ${
                      slideDirection === "left"
                        ? "-translate-x-full opacity-0"
                        : slideDirection === "right"
                        ? "translate-x-full opacity-0"
                        : "translate-x-0"
                    }`}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                      {activeFlavor.name}
                    </h3>
                    <p className="mt-3 text-gray-600">
                      {activeFlavor.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="font-medium text-gray-800">Ingredients</h4>
                      <ul className="mt-2 space-y-1">
                        {activeFlavor.ingredients.map((ingredient, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 flex items-center"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-medium text-gray-800">Benefits</h4>
                      <ul className="mt-2 space-y-1">
                        {activeFlavor.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 flex items-center"
                          >
                            <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <a
                        href={`https://wa.me/6281234567890?text=Hi%20PureLeaf!%20I'm%20interested%20in%20ordering%20the%20${encodeURIComponent(
                          activeFlavor.name
                        )}%20flavor.%20Can%20I%20get%20more%20information?`}
                        target="_blank"
                        className="bg-emerald-600 text-white hover:bg-emerald-700 duration-300 transition-colors px-6 py-3 rounded-full font-medium"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>

                  <div
                    className={`relative flex items-center justify-center transition-all duration-300 ${
                      slideDirection === "left"
                        ? "translate-x-full opacity-0"
                        : slideDirection === "right"
                        ? "-translate-x-full opacity-0"
                        : "translate-x-0"
                    }`}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 to-transparent blur-md"></div>
                      <img
                        src={activeFlavor.imageUrl}
                        alt={activeFlavor.name}
                        className="relative z-10 rounded-2xl shadow-lg object-cover h-64 sm:h-80 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
                aria-label="Previous flavor"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
                aria-label="Next flavor"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavorsShowcase;
