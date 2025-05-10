import React from "react";
import {
  Leaf,
  Droplets,
  Award,
  HeartPulse,
  Recycle,
  ShieldCheck,
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      title: "100% Organic",
      description:
        "We use only certified organic tea leaves and natural ingredients in all our products.",
    },
    {
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      title: "Real Brewed Tea",
      description:
        "Every bottle contains authentic brewed tea, never from concentrate or artificial flavors.",
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Award-Winning Taste",
      description:
        "Our unique flavors have won multiple awards in international beverage competitions.",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-red-500" />,
      title: "Health-Conscious",
      description:
        "Low in calories and sugar, rich in antioxidants and natural benefits from real tea.",
    },
    {
      icon: <Recycle className="w-6 h-6 text-green-500" />,
      title: "Sustainable Packaging",
      description:
        "Our bottles are made from 100% recycled materials and are fully recyclable.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      title: "Quality Guaranteed",
      description:
        "Rigorous quality control ensures consistency and excellence in every bottle.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-36 bg-gray-50"
        style={{
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'%3E%3C/path%3E%3C/svg%3E\")",
          maskSize: "cover",
          WebkitMaskImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'%3E%3C/path%3E%3C/svg%3E\")",
          WebkitMaskSize: "cover",
        }}
      ></div>

      <div className="container mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-emerald-600">PureLeaf</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to quality, sustainability, and your wellbeing with
            every refreshing sip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition-all hover:shadow-md hover:translate-y-[-4px] duration-300"
            >
              <div className="p-3 rounded-full inline-flex items-center justify-center bg-gray-50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 italic">
            "Our mission is to create the perfect balance between taste, health,
            and sustainability."
          </p>
          <p className="mt-2 text-sm text-emerald-600 font-medium">
            — Maria Chen, Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
