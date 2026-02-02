import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Phone, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-2">
              <div className={`p-1.5 rounded-lg transition-all duration-300 ${scrolled ? 'bg-green-600' : 'bg-green-500/20 backdrop-blur-sm'}`}>
                <Sun className={`h-6 w-6 transition-colors ${scrolled ? 'text-white' : 'text-green-400'}`} />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className={`text-xl font-black tracking-tighter ${scrolled ? 'text-gray-900' : 'text-white'}`}>SOLAR</span>
                <span className={`text-xs font-bold tracking-[0.2em] ${scrolled ? 'text-green-600' : 'text-green-400'}`}>DREMCXL</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-bold tracking-tight transition-all duration-300 group ${scrolled
                      ? (isActive ? 'text-green-600' : 'text-gray-600 hover:text-green-600')
                      : (isActive ? 'text-green-400' : 'text-white/80 hover:text-white')
                      }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300 transform origin-left ${isActive
                      ? 'scale-x-100 bg-green-500'
                      : 'scale-x-0 group-hover:scale-x-100 bg-green-400/50'
                      }`} />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Section */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="tel:+2349138502947"
                className={`flex items-center space-x-2 font-bold text-sm transition-colors ${scrolled ? 'text-green-600 hover:text-green-700' : 'text-white hover:text-green-400'
                  }`}
              >
                <div className="p-2 rounded-full border border-current/20">
                  <Phone className="h-4 w-4" />
                </div>
                <span>CALL NOW</span>
              </a>
              <Link
                to="/contact"
                className={`btn-primary !px-6 !py-2.5 !rounded-full !text-sm shadow-xl shadow-green-500/20 active:scale-95 transition-transform`}
              >
                FREE QUOTE
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar - Moved outside header for better stacking context */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100000] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[100001] md:hidden overflow-y-auto"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 bg-green-600 rounded-lg">
                      <Sun className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-black text-gray-900 tracking-tighter">SOLAR DREMCXL</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-gray-100 rounded-full text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex justify-between items-center py-4 px-6 rounded-2xl transition-all ${location.pathname === item.href
                        ? 'bg-green-50 text-green-600 font-bold'
                        : 'text-gray-700 font-semibold hover:bg-gray-50'
                        }`}
                    >
                      {item.name}
                      <ChevronRight className={`h-4 w-4 transition-transform ${location.pathname === item.href ? 'translate-x-1' : 'opacity-0'}`} />
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-10">
                  <div className="bg-gray-50 p-6 rounded-3xl space-y-4">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center">Contact Us</p>
                    <a
                      href="tel:+2349138502947"
                      className="flex items-center justify-center space-x-3 w-full py-4 text-green-600 font-bold bg-white rounded-2xl shadow-sm border border-green-100 hover:scale-[1.02] transition-transform"
                    >
                      <Phone className="h-5 w-5" />
                      <span>+234 913 850 2947</span>
                    </a>
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary w-full !py-4 !rounded-2xl text-center shadow-lg shadow-green-500/20"
                    >
                      GET FREE ASSESSMENT
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;