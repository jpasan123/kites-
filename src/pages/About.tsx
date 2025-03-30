import { motion } from 'framer-motion';
import { History, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-[#2A8B84]">ABOUT US</h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 items-center mb-16"
      >
        <div>
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" 
            alt="Restaurant interior" 
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#2A8B84]">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded in 2020, Kites Takeaway Cafe brings the authentic taste of Ceylon Malay cuisine to Melbourne's vibrant food scene. Our recipes have been passed down through generations, preserving the unique flavors and traditions of our heritage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <History className="w-12 h-12 text-[#2A8B84] mb-2" />
              <h3 className="font-bold">Since 2020</h3>
              <p className="text-sm text-gray-600">Serving Melbourne</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-[#2A8B84] mb-2" />
              <h3 className="font-bold">Family Owned</h3>
              <p className="text-sm text-gray-600">Traditional Recipe</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-[#2A8B84] mb-2" />
              <h3 className="font-bold">Fresh Daily</h3>
              <p className="text-sm text-gray-600">Quality Ingredients</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;