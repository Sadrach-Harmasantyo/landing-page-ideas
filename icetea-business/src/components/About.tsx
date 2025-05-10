import React from "react";
import { Leaf, Droplets, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="our-story" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1564911907925-6f3b7bb33f2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGljZSUyMHRlYSUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
                alt="Tea farm"
                className="w-full h-auto"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-100 rounded-full translate-x-1/4 translate-y-1/4 opacity-70"></div>
          </div>

          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-4">
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Crafting Refreshment{" "}
              <span className="text-emerald-600">Since 2015</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-justify">
              <p>
                PureLeaf began with a simple mission: to create premium ice tea
                that's both delicious and good for you. Founded by tea
                enthusiast Maria Chen, our journey started in a small kitchen in
                Portland, experimenting with organic tea leaves and natural
                flavor combinations.
              </p>
              <p>
                Today, we source our ingredients from sustainable farms around
                the world, maintaining direct relationships with our growers to
                ensure quality and ethical practices. Each bottle of PureLeaf
                represents our commitment to craftsmanship, taste, and wellness.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 z-10">
                  <Leaf className="w-8 h-8 text-emerald-500 mb-2" />
                  <h3 className="font-semibold text-gray-800">
                    Organic Sourcing
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 z-10">
                  <Droplets className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-semibold text-gray-800">
                    Small Batch Brewing
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 z-10">
                  <Heart className="w-8 h-8 text-red-500 mb-2" />
                  <h3 className="font-semibold text-gray-800">
                    Made with Love
                  </h3>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/6281234567890?text=Hi%20PureLeaf!%20I'm%20about%20to%20know%20your%20%20sustainability%20mission."
                  target="_blank"
                  className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors inline-flex items-center"
                >
                  Learn about our sustainability mission
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
