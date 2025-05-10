import React, { useState } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [locationSuccess, setLocationSuccess] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailSuccess(true);
      setEmail("");
      setTimeout(() => setEmailSuccess(false), 3000);
    }
  };

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode) {
      setLocationSuccess(true);
      setZipCode("");
      setTimeout(() => setLocationSuccess(false), 3000);
    }
  };

  return (
    <section
      id="locations"
      className="py-20 bg-emerald-800 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Find <span className="text-yellow-300">PureLeaf</span> Near You
          </h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto">
            Discover where to find our refreshing ice teas or join our
            newsletter for exclusive offers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Store Locator */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Find a Store
            </h3>
            <p className="text-emerald-100 mb-6">
              Enter your zip code to find PureLeaf at grocery stores, cafes, and
              markets near you.
            </p>

            <form onSubmit={handleLocationSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-emerald-200 border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-medium rounded-lg transition-colors"
                >
                  Find Stores
                </button>
              </div>
              {locationSuccess && (
                <div className="mt-3 text-sm text-yellow-300">
                  Thanks! We'll show you stores near your location.
                </div>
              )}
            </form>

            <div className="space-y-4">
              <h4 className="font-medium">Featured Locations:</h4>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">PureLeaf Flagship Store</p>
                  <p className="text-emerald-100 text-sm">
                    Sudirman Street No 17, Surabaya City, East Java
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Downtown Tea Lounge</p>
                  <p className="text-emerald-100 text-sm">
                    Jayapura Sreet No 69, Manokwari, Papua
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Beachside Refreshments</p>
                  <p className="text-emerald-100 text-sm">
                    Pandawa Street No 12, Denpasar, Bali
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Stay Connected
            </h3>
            <p className="text-emerald-100 mb-6">
              Subscribe to our newsletter for exclusive offers, new flavor
              announcements, and tea-inspired recipes.
            </p>

            <form onSubmit={handleEmailSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-emerald-200 border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-medium rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {emailSuccess && (
                <div className="mt-3 text-sm text-yellow-300">
                  Thanks for subscribing! Check your email soon for a special
                  welcome offer.
                </div>
              )}
            </form>

            <div className="space-y-4">
              <h4 className="font-medium">Contact Us:</h4>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <p>(+62) 123-456-7890</p>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <p>hello@pureleaf-tea.com</p>
              </div>

              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3" />
                <p>Mon-Fri : 9AM - 5PM</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram"].map((platform) => (
                  <a
                    key={platform}
                    href={`#${platform}`}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${platform}.svg`}
                      alt={platform}
                      className="w-5 h-5 invert"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
