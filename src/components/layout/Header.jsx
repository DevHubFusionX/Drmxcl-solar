import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">Solar Reckx</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-green-600 transition-colors duration-300 ${
                  location.pathname === item.href ? 'text-green-600 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+234"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
            <Link to="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center space-x-2">
                    <Sun className="h-6 w-6 text-green-600" />
                    <span className="text-xl font-bold text-gray-800">Solar Reckx</span>
                  </div>
                  <button onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
                
                <nav className="space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-medium transition-colors duration-300 ${
                        location.pathname === item.href 
                          ? 'text-green-600' 
                          : 'text-gray-700 hover:text-green-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-8 space-y-4">
                  <a
                    href="tel:+234"
                    className="flex items-center space-x-3 text-gray-600 hover:text-green-600"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary block text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;