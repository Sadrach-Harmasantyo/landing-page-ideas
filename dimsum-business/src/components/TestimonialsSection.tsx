import { Card } from "./ui/card";

const testimonials = [
  {
    id: 1,
    name: "David Chen",
    role: "Food Critic",
    quote:
      "The best har gow I've tasted outside of Hong Kong. The attention to detail in each dumpling is remarkable.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Local Customer",
    quote:
      "My family and I visit every weekend for brunch. The siu mai and cheung fun are absolutely divine!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Michael Wong",
    role: "Restaurant Blogger",
    quote:
      "An authentic dim sum experience with a modern twist. The flavors are balanced and the service is impeccable.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-dimsum font-serif text-lg mb-3">TESTIMONIALS</h2>
          <h3 className="text-4xl font-serif font-bold mb-6">
            What Our Customers Say
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full mb-6 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <svg
                  className="text-dimsum-gold h-8 w-8 mb-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21,5.16l-3.64,-3.64c-0.43,-0.43 -1.11,-0.43 -1.54,0l-3.82,3.82 5.46,5.46 3.54,-3.63c0.43,-0.43 0.43,-1.18 0,-1.64l-0.01,0l0.01,0.03zM3,16v4c0,0.55 0.45,1 1,1h4l9.88,-9.88 -5.46,-5.46 -9.42,9.34z" />
                </svg>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
