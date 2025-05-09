import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Har Gow",
    description: "Delicate shrimp dumplings wrapped in a translucent skin",
    price: 8.95,
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1824&auto=format&fit=crop",
    popular: true,
  },
  {
    id: 2,
    name: "Siu Mai",
    description: "Open-topped dumplings filled with pork and shrimp",
    price: 7.95,
    image:
      "https://images.unsplash.com/photo-1576577445504-6af96477db52?q=80&w=1824&auto=format&fit=crop",
    popular: false,
  },
  {
    id: 3,
    name: "Char Siu Bao",
    description: "Fluffy steamed buns filled with barbecue pork",
    price: 6.95,
    image:
      "https://images.unsplash.com/photo-1651399436026-3ca4088b3d6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhb3xlbnwwfHwwfHx8MA%3D%3D",
    popular: true,
  },
  {
    id: 4,
    name: "Cheung Fun",
    description: "Rice noodle rolls filled with shrimp, beef, or pork",
    price: 9.95,
    image:
      "https://media.istockphoto.com/id/186239497/photo/cheong-fun.webp?a=1&b=1&s=612x612&w=0&k=20&c=emcx13e026Sv_RcAIuCwmMyDxiPrXJMFx6TL1o4Lud0=",
    popular: false,
  },
  {
    id: 5,
    name: "Cheung Fun",
    description: "Rice noodle rolls filled with shrimp, beef, or pork",
    price: 9.95,
    image:
      "https://media.istockphoto.com/id/186239497/photo/cheong-fun.webp?a=1&b=1&s=612x612&w=0&k=20&c=emcx13e026Sv_RcAIuCwmMyDxiPrXJMFx6TL1o4Lud0=",
    popular: false,
  },
  {
    id: 6,
    name: "Char Siu Bao",
    description: "Fluffy steamed buns filled with barbecue pork",
    price: 6.95,
    image:
      "https://images.unsplash.com/photo-1651399436026-3ca4088b3d6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhb3xlbnwwfHwwfHx8MA%3D%3D",
    popular: true,
  },
  {
    id: 7,
    name: "Har Gow",
    description: "Delicate shrimp dumplings wrapped in a translucent skin",
    price: 8.95,
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1824&auto=format&fit=crop",
    popular: true,
  },
  {
    id: 8,
    name: "Siu Mai",
    description: "Open-topped dumplings filled with pork and shrimp",
    price: 7.95,
    image:
      "https://images.unsplash.com/photo-1576577445504-6af96477db52?q=80&w=1824&auto=format&fit=crop",
    popular: false,
  },
];

const MenuSection = () => {
  // Add state to track whether to show all menu items
  const [showAllItems, setShowAllItems] = useState(false);

  // Get the items to display based on state
  const displayedItems = showAllItems ? menuItems : menuItems.slice(0, 4);

  const handleOrderOnline = (menu: string) => {
    const waNumber = "6281234567890"; // Replace with your WhatsApp number
    const message = `Hello, I would like to order some ${menu}`; // Optional default message
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-dimsum font-serif text-lg mb-3">OUR MENU</h2>
          <h3 className="text-4xl font-serif font-bold mb-6">
            Signature Dim Sum Creations
          </h3>
          <p className="text-gray-600">
            Each dim sum is meticulously crafted by our chefs, combining
            traditional techniques with premium ingredients to create an
            exceptional dining experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.popular && (
                  <Badge className="absolute top-3 right-3 bg-dimsum">
                    Popular
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif font-bold text-lg">{item.name}</h4>
                  <span className="text-dimsum font-bold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <Button
                  onClick={() => handleOrderOnline(item.name)}
                  variant="outline"
                  className="w-full border-dimsum text-dimsum hover:bg-dimsum hover:text-white"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          {!showAllItems ? (
            <Button
              className="bg-dimsum hover:bg-dimsum-dark text-white px-8"
              onClick={() => setShowAllItems(true)}
            >
              View Full Menu
            </Button>
          ) : (
            <Button
              className="bg-dimsum-dark hover:bg-dimsum text-white px-8"
              onClick={() => setShowAllItems(false)}
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
