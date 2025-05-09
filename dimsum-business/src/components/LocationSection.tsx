import { Clock, MapPin } from "lucide-react";

const hours = [
  { day: "Monday - Thursday", hours: "08:00 AM - 9:30 PM" },
  { day: "Friday - Saturday", hours: "08:00 AM - 10:30 PM" },
  { day: "Sunday", hours: "10:00 AM - 9:00 PM" },
];

const LocationSection = () => {
  const handleOrderOnline = () => {
    const waNumber = "6281234567890"; // Replace with your WhatsApp number
    const message = "Hello, I would like to make a reservation"; // Optional default message
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Map/Location Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-a71c-61fd-b0d6-9fc788f31a9c/raw?se=2025-05-09T16%3A04%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-09T12%3A13%3A07Z&ske=2025-05-10T12%3A13%3A07Z&sks=b&skv=2024-08-04&sig=pdyapMM/TCXsQ%2BDepZkIbaKo7wcUxyJnCHprgud5wo0%3D"
              alt="Restaurant location"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Location Details */}
          <div>
            <h2 className="text-dimsum font-serif text-lg mb-3">VISIT US</h2>
            <h3 className="text-4xl font-serif font-bold mb-6">
              Find Our Restaurant
            </h3>

            <div className="mb-8">
              <div className="flex items-start mb-4">
                <MapPin className="text-dimsum mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-gray-600">
                    Merdeka Raya Street No 123
                    <br />
                    Tebet, South Jakarta
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-dimsum mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Hours of Operation</h4>
                  <div className="text-gray-600">
                    {hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between mb-1">
                        <span className="mr-4">{schedule.day}</span>
                        <span>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h4 className="font-bold mb-2">Reservations</h4>
              <p className="text-gray-600 mb-4">
                For groups of 6 or more, we recommend making a reservation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleOrderOnline}
                  className="bg-dimsum text-white py-3 px-6 rounded flex items-center justify-center hover:bg-dimsum-dark transition-colors"
                >
                  (+62) 123-456-7890
                </button>
                <a
                  href="mailto:dimsumdelight@gmail.com"
                  className="border border-dimsum text-dimsum py-3 px-6 rounded flex items-center justify-center hover:bg-dimsum hover:text-white transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
