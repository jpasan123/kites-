import { motion } from 'framer-motion';
import { Coffee, Beef, Salad, Cookie } from 'lucide-react';

const MenuItem = ({ name, description, price }: { name: string; description: string; price: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="border-b border-gray-200 py-4"
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-bold text-lg text-[#2A8B84]">{name}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <span className="text-[#F4A460] font-bold">{price}</span>
    </div>
  </motion.div>
);

const MenuSection = ({ title, icon: Icon, items }: { title: string; icon: any; items: any[] }) => (
  <div className="mb-12">
    <div className="flex items-center mb-6">
      <Icon className="w-8 h-8 text-[#2A8B84] mr-3" />
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="space-y-4">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const Menu = () => {
  const mainDishes = [
    {
      name: "Nasi Goreng Special",
      description: "Traditional fried rice with chicken, shrimp, and vegetables",
      price: "$15.90"
    },
    {
      name: "Beef Rendang",
      description: "Slow-cooked beef in coconut milk and spices",
      price: "$18.90"
    }
  ];

  const sides = [
    {
      name: "Roti Canai",
      description: "Flaky flatbread served with curry sauce",
      price: "$6.90"
    },
    {
      name: "Sambal Vegetables",
      description: "Mixed vegetables in spicy sambal sauce",
      price: "$8.90"
    }
  ];

  const desserts = [
    {
      name: "Watalappan",
      description: "Traditional coconut custard pudding",
      price: "$7.90"
    },
    {
      name: "Pisang Goreng",
      description: "Crispy fried banana with honey",
      price: "$6.90"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-[#2A8B84]">OUR MENU</h1>
      <div className="max-w-3xl mx-auto">
        <MenuSection title="Main Dishes" icon={Beef} items={mainDishes} />
        <MenuSection title="Sides" icon={Salad} items={sides} />
        <MenuSection title="Desserts" icon={Cookie} items={desserts} />
      </div>
    </div>
  );
};

export default Menu;