import React from "react";
import { Leaf } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <span className="ml-2 text-xl font-bold text-white">
                PureLeaf
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Refreshing minds and bodies with premium organic ice teas since
              2015.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map(
                (platform) => (
                  <a
                    key={platform}
                    href={`#${platform}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${platform}.svg`}
                      alt={platform}
                      className="w-5 h-5 invert opacity-75 hover:opacity-100"
                    />
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Flavors", "Features", "Testimonials", "Locations"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {[
                { name: "Find a Store", link: "locations" },
                { name: "Contact Us", link: "locations" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest flavors and promotions.
            </p>
            <form className="mb-4">
              <div className="flex flex-col lg:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 lg:w-11/12"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} PureLeaf Tea Co. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <a
                href="#privacy-policy"
                className="text-gray-500 hover:text-emerald-400 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#terms-of-service"
                className="text-gray-500 hover:text-emerald-400 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#accessibility"
                className="text-gray-500 hover:text-emerald-400 text-sm"
              >
                Accessibility
              </a>
              <a
                href="#cookie-policy"
                className="text-gray-500 hover:text-emerald-400 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
