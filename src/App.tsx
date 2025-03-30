import { FacebookProvider, Page } from 'react-facebook';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Utensils, Coffee, Beef, Salad, Cookie, History, Users, 
  Clock, MapPin, Phone, Mail, Menu as MenuIcon, X,
  Facebook, Instagram, Twitter
} from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const mainMenu = [
    {
      name: "Rice & Curry Beef & Chicken",
      description: "Rice, one meat and two vegetable curries",
      price: "$15.90"
    },
    {
      name: "Rice & Curry Fish",
      description: "Rice, one meat and two vegetable curries",
      price: "$15.90"
    },
    {
      name: "Vegetarian Rice & Curry",
      description: "Rice and three vegetable curries",
      price: "$14.90"
    },
    {
      name: "Kottu Roti Beef or Chicken",
      description: "",
      price: "$19.90"
    },
    {
      name: "Malay Nasi Goreng or Fried Rice",
      description: "Beef or Chicken",
      price: "$18.90"
    }
  ];

  const snacks = [
    {
      name: "Fish Bun",
      price: "$3.50"
    },
    {
      name: "Caramelized Onion Bun",
      price: "$3.50"
    },
    {
      name: "Patties",
      price: "$2.75"
    },
    {
      name: "Cutlets",
      price: "$1.75"
    },
    {
      name: "Pastry",
      price: "$3.00"
    }
  ];

  const desserts = [
    {
      name: "Watalappan",
      price: "$6.50"
    },
    {
      name: "Sago Pudding",
      price: "$6.50"
    },
    {
      name: "Gulab Jamun",
      price: "$6.50"
    }
  ];

  const drinks = [
    {
      name: "Cafe Latte",
      prices: {
        medium: "$4.00",
        large: "$5.00"
      }
    },
    {
      name: "Cappuccino",
      prices: {
        medium: "$4.00",
        large: "$5.00"
      }
    },
    {
      name: "Tea",
      prices: {
        medium: "$3.50"
      }
    },
    {
      name: "Iced Coffee",
      price: "$6.50"
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Nasi Goreng Special",
      description: "Our signature fried rice dish"
    },
    {
      url: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Roti Canai",
      description: "Flaky flatbread served with curry sauce"
    },
    {
      url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Beef Rendang",
      description: "Slow-cooked beef in aromatic spices"
    },
    {
      url: "https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Fresh Ingredients",
      description: "Quality ingredients for authentic flavors"
    },
    {
      url: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Traditional Desserts",
      description: "Sweet treats from our kitchen"
    },
    {
      url: "https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Ceylon Tea",
      description: "Premium tea selection"
    },
    {
      url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Curry Selection",
      description: "Various curry dishes"
    },
    {
      url: "https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Sambal",
      description: "Spicy chili paste condiment"
    },
    {
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      title: "Daily Specials",
      description: "Chef's special preparations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#2A8B84]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white text-2xl font-bold flex items-center tracking-wider"
            >
              KITES
              <Utensils className="ml-2" size={24} />
            </button>
            
            <button 
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon size={24} />
            </button>

            <div className="hidden md:flex space-x-12">
              <button onClick={() => scrollToSection('home')} className="nav-link">HOME</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">ABOUT US</button>
              <button onClick={() => scrollToSection('menu')} className="nav-link">MENU</button>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">GALLERY</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">CONTACT US</button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden">
              <div className="flex flex-col space-y-4 py-4">
                <button onClick={() => scrollToSection('home')} className="nav-link text-left">HOME</button>
                <button onClick={() => scrollToSection('about')} className="nav-link text-left">ABOUT US</button>
                <button onClick={() => scrollToSection('menu')} className="nav-link text-left">MENU</button>
                <button onClick={() => scrollToSection('gallery')} className="nav-link text-left">GALLERY</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link text-left">CONTACT US</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white px-4"
          >
            <h1 className="text-6xl font-bold mb-4 tracking-wider">KITES</h1>
            <h2 className="text-3xl mb-8 tracking-wide">TAKEAWAY CAFE</h2>
            <p className="text-xl max-w-2xl mx-auto tracking-wide">
              Authentic Ceylon Malay Cuisine
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#f5f8f8]" id="about">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-[#2A8B84]">ABOUT US</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl tracking-wide leading-relaxed text-gray-700 mb-12">
              Kites Takeaway Cafe is a diverse business aiming to provide you with excellent service 
              and convenience for your entire takeaway, catering and home meals needs. Kites Takeaway 
              Cafe has a variety of Authentic Ceylon Malay food, located in Melbourne's South East.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-[#2A8B84]" id="menu">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">MENU</h2>
          
          {/* Menu Images */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cursor-pointer group"
              onClick={() => setSelectedImage("https://i.ibb.co/1t6RWKqr/menu-image-1.jpg")}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://i.ibb.co/1t6RWKqr/menu-image-1.jpg"
                  alt="Menu Page 1"
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-xl font-bold">Click to View</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cursor-pointer group"
              onClick={() => setSelectedImage("https://i.ibb.co/ZRJb1x3n/menu-image-2.jpg")}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://i.ibb.co/ZRJb1x3n/menu-image-2.jpg"
                  alt="Menu Page 2"
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-xl font-bold">Click to View</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="bg-[#2A8B84] text-white">
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 border-b border-[#F4A460] pb-2">MENU</h3>
                <div className="space-y-4">
                  {mainMenu.map((item, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        {item.description && (
                          <p className="text-sm text-gray-200">{item.description}</p>
                        )}
                      </div>
                      <span className="text-[#F4A460] font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 border-b border-[#F4A460] pb-2">ALL DAY SNACKS</h3>
                <div className="space-y-4">
                  {snacks.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <h4 className="font-bold">{item.name}</h4>
                      <span className="text-[#F4A460] font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 border-b border-[#F4A460] pb-2">DESSERTS & SWEETS</h3>
                <div className="space-y-4">
                  {desserts.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <h4 className="font-bold">{item.name}</h4>
                      <span className="text-[#F4A460] font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 border-b border-[#F4A460] pb-2">COFFEE & DRINKS</h3>
                <div className="space-y-4">
                  {drinks.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <h4 className="font-bold">{item.name}</h4>
                      <div className="text-right">
                        {item.prices ? (
                          <>
                            <div>M: {item.prices.medium}</div>
                            {item.prices.large && <div>L: {item.prices.large}</div>}
                          </>
                        ) : (
                          <span className="text-[#F4A460] font-bold">{item.price}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#f5f8f8]" id="gallery">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-[#2A8B84]">THE GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer group"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl aspect-square">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-[#2A8B84]">CONTACT</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="contact-info space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#2A8B84] mt-1" />
                  <p>1304 Center Road, Clayton South, 3169</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[#2A8B84]" />
                  <p>(03) 9544 0046</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[#2A8B84]" />
                  <p>contact@kitescafe.com.au</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold mb-4">Open 6 days a week</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">Tuesday - Thursday</p>
                    <p>11am - 8pm</p>
                  </div>
                  <div>
                    <p className="font-bold">Friday - Saturday</p>
                    <p>11am - 9pm</p>
                  </div>
                  <div>
                    <p className="font-bold">Sunday</p>
                    <p>11am - 8pm</p>
                  </div>
                  <div>
                    <p className="font-bold">Monday</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <FacebookProvider appId="your-app-id">
                  <Page 
                    href="https://www.facebook.com/www.kites.com.au" 
                    tabs="timeline"
                    width={500}
                    height={400}
                  />
                </FacebookProvider>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.492575907706!2d145.11342771531906!3d-37.92812097972721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b229f9f5aaf%3A0x9f39b0c93ebe75b9!2sKites!5e0!3m2!1sen!2sau!4v1605494437252!5m2!1sen!2sau"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#2A8B84] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                KITES
                <Utensils className="ml-2" size={24} />
              </h3>
              <p className="text-gray-200">
                Authentic Ceylon Malay Cuisine in Melbourne's South East.
                Experience the taste of tradition.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-gray-200">Home</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-gray-200">About Us</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('menu')} className="hover:text-gray-200">Menu</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="hover:text-gray-200">Gallery</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-gray-200">Contact</button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/www.kites.com.au" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-gray-200 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#3aa59d] mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Kites Takeaway Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Enhanced Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              <motion.img
                src={selectedImage}
                alt="Gallery"
                className="w-full rounded-lg shadow-2xl"
                layoutId={selectedImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;