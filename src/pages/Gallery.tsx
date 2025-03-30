import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Traditional Nasi Goreng"
    },
    {
      url: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Authentic Roti"
    },
    {
      url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Spicy Curry"
    },
    {
      url: "https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Fresh Ingredients"
    },
    {
      url: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Traditional Desserts"
    },
    {
      url: "https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Ceylon Tea"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-[#2A8B84]">GALLERY</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;