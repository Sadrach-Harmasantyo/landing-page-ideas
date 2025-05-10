export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
  flavorId: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Fitness Instructor",
    quote:
      "As a fitness instructor, I'm always looking for healthy, tasty beverages. Classic Peach has become my go-to after workouts - refreshing, not too sweet, and gives me the perfect energy boost!",
    imageUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    flavorId: 1,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Tech Entrepreneur",
    quote:
      "Berry Bliss is my secret weapon during long coding sessions. It's refreshing, keeps me hydrated, and doesn't have the crash that comes with energy drinks. My entire team is now hooked!",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    flavorId: 2,
  },
  {
    id: 3,
    name: "Emma Johnson",
    role: "Yoga Instructor",
    quote:
      "Citrus Zen perfectly complements my morning meditation routine. The subtle balance of citrus and chamomile centers me and sets a positive tone for the day. It's mindfulness in a bottle.",
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    flavorId: 3,
  },
  {
    id: 4,
    name: "David Park",
    role: "Marathon Runner",
    quote:
      "Training for marathons means I'm serious about what I put in my body. The Wellness Elixir has become part of my recovery routine. It's soothing, delicious, and supports my body's natural healing.",
    imageUrl:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    flavorId: 6,
  },
];
