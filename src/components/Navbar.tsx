import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2A8B84] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">KITES</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/about" className="nav-link">ABOUT US</Link>
            <Link to="/menu" className="nav-link">MENU</Link>
            <Link to="/gallery" className="nav-link">GALLERY</Link>
            <Link to="/contact" className="nav-link">CONTACT US</Link>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-[#2A8B84] md:hidden">
              <div className="flex flex-col items-center py-4 space-y-4">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/about" className="nav-link">ABOUT US</Link>
                <Link to="/menu" className="nav-link">MENU</Link>
                <Link to="/gallery" className="nav-link">GALLERY</Link>
                <Link to="/contact" className="nav-link">CONTACT US</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;