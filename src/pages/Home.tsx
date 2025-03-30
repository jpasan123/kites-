import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white px-4"
        >
          <h1 className="text-6xl font-bold mb-4 flex items-center justify-center">
            KITES
            <Utensils className="ml-4" size={40} />
          </h1>
          <h2 className="text-3xl mb-8">Authentic Ceylon Malay Cuisine</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Experience the authentic flavors of Ceylon Malay cuisine in Melbourne's South East.
            Our diverse menu offers excellent service and convenience for all your takeaway needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;