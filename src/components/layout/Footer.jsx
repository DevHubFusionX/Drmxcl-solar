import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">Solar Reckx</span>
            </div>
            <p className="text-gray-300 mb-4">
              Reliable Solar & Inverter Solutions for Homes & Businesses. 
              Providing affordable, reliable energy solutions to keep your power running.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/234"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">info@solarreckx.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Solar Reckx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;