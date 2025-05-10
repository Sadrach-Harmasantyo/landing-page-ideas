export interface Flavor {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  color: string;
  ingredients: string[];
  benefits: string[];
}

export const flavors: Flavor[] = [
  {
    id: 1,
    name: "Classic Peach",
    description:
      "Our signature blend with juicy peach infusion and premium black tea leaves.",
    imageUrl:
      "https://images.pexels.com/photos/5379876/pexels-photo-5379876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#FFCBA4",
    ingredients: [
      "Black Tea",
      "Peach Extract",
      "Organic Cane Sugar",
      "Filtered Water",
    ],
    benefits: [
      "Rich in Antioxidants",
      "Natural Energy Boost",
      "No Artificial Colors",
    ],
  },
  {
    id: 2,
    name: "Berry Bliss",
    description:
      "A refreshing mix of summer berries with hints of hibiscus and green tea.",
    imageUrl:
      "https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#C1A7CE",
    ingredients: ["Green Tea", "Mixed Berries", "Hibiscus", "Organic Honey"],
    benefits: ["Vitamin-Rich", "Immune Support", "Naturally Sweet"],
  },
  {
    id: 3,
    name: "Citrus Zen",
    description:
      "Zesty lemon and orange notes balanced with calming chamomile undertones.",
    imageUrl:
      "https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#FFD700",
    ingredients: [
      "White Tea",
      "Lemon",
      "Orange Zest",
      "Chamomile",
      "Agave Nectar",
    ],
    benefits: ["Stress Relief", "Digestive Aid", "Refreshing Hydration"],
  },
  {
    id: 4,
    name: "Minty Fresh",
    description:
      "Cool spearmint and peppermint with subtle cucumber for ultimate refreshment.",
    imageUrl:
      "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#90EE90",
    ingredients: [
      "Green Tea",
      "Spearmint",
      "Peppermint",
      "Cucumber Extract",
      "Touch of Lime",
    ],
    benefits: ["Cooling Sensation", "Mental Clarity", "Digestive Support"],
  },
  {
    id: 5,
    name: "Tropical Paradise",
    description:
      "Exotic blend of pineapple, mango and passion fruit with jasmine tea base.",
    imageUrl:
      "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#FFA07A",
    ingredients: [
      "Jasmine Tea",
      "Pineapple",
      "Mango",
      "Passion Fruit",
      "Coconut Water",
    ],
    benefits: ["Tropical Escape", "Electrolyte Balance", "Hydration Boost"],
  },
  {
    id: 6,
    name: "Wellness Elixir",
    description:
      "Our wellness blend with ginger, turmeric and a hint of black pepper and honey.",
    imageUrl:
      "https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D",
    color: "#E6BE8A",
    ingredients: [
      "Rooibos Tea",
      "Ginger",
      "Turmeric",
      "Black Pepper",
      "Raw Honey",
      "Lemon",
    ],
    benefits: ["Anti-inflammatory", "Immunity Support", "Natural Energy"],
  },
];
