import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, MessageCircle, ArrowRight, Zap, Shield, Award } from 'lucide-react';
import '../../styles/theme.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--gray-900)' }}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl" style={{ backgroundColor: 'var(--energy-green)' }}>
                <Sun className="h-8 w-8" style={{ color: 'var(--white)' }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--white)' }}>Solar Drmcxl</h3>
                <p className="text-sm" style={{ color: 'var(--energy-green)' }}>Clean Energy for Nigeria</p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed max-w-md" style={{ color: 'var(--gray-300)' }}>
              Leading Nigeria's renewable energy revolution with premium solar installations, 
              inverter solutions, and expert engineering services since 2019.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Zap, text: "24/7 Support" },
                { icon: Shield, text: "10-Year Warranty" },
                { icon: Award, text: "Certified Engineers" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <feature.icon className="h-4 w-4" style={{ color: 'var(--energy-green)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--gray-400)' }}>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold" style={{ color: 'var(--white)' }}>Quick Links</h4>
            <nav className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About Us' },
                { to: '/projects', label: 'Projects' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center space-x-2 group transition-colors duration-300"
                  style={{ color: 'var(--gray-400)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--energy-green)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--gray-400)'}
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold" style={{ color: 'var(--white)' }}>Get In Touch</h4>
            <div className="space-y-4">
              
              {/* Phone Numbers */}
              <div className="space-y-2">
                <a
                  href="tel:+2349138502947"
                  className="flex items-center space-x-3 group transition-colors duration-300"
                  style={{ color: 'var(--gray-300)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--energy-green)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--gray-300)'}
                >
                  <Phone className="h-4 w-4" style={{ color: 'var(--energy-green)' }} />
                  <span className="font-medium">+234 913 850 2947</span>
                </a>
                <a
                  href="tel:+2347081741999"
                  className="flex items-center space-x-3 group transition-colors duration-300 ml-7"
                  style={{ color: 'var(--gray-400)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--energy-green)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--gray-400)'}
                >
                  <span>+234 708 174 1999</span>
                </a>
              </div>

              {/* Email */}
              <a
                href="mailto:Drmcxlihemeje@gmail.com"
                className="flex items-center space-x-3 group transition-colors duration-300"
                style={{ color: 'var(--gray-300)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--energy-green)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--gray-300)'}
              >
                <Mail className="h-4 w-4" style={{ color: 'var(--energy-green)' }} />
                <span className="break-all">Drmcxlihemeje@gmail.com</span>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" style={{ color: 'var(--energy-green)' }} />
                <span style={{ color: 'var(--gray-300)' }}>Lagos, Nigeria</span>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2349138502947"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--energy-green)', 
                  color: 'var(--white)' 
                }}
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-6" style={{ borderColor: 'var(--gray-700)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p style={{ color: 'var(--gray-400)' }}>
              © 2024 Solar Drmcxl. All rights reserved. | Powering Nigeria's Future
            </p>

            {/* Business Hours */}
            <div className="text-center md:text-right">
              <p className="text-sm font-medium" style={{ color: 'var(--gray-300)' }}>
                24/7 Emergency Support Available
              </p>
              <p className="text-xs" style={{ color: 'var(--gray-500)' }}>
                Mon-Fri: 8AM-6PM | Sat: 9AM-4PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;