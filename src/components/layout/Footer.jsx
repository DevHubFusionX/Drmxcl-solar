import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import '../../styles/theme.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white relative py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-green-600 rounded-xl transition-transform group-hover:scale-110">
                <Sun className="h-7 w-7 text-white" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-black tracking-tighter">SOLAR</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-green-500 uppercase">DREMCXL</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed font-medium text-sm">
              Leading Nigeria's renewable energy revolution with premium solar solutions
              and expert engineering since 2019.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Menu</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'About', to: '/about' },
                { label: 'Projects', to: '/projects' },
                { label: 'Contact', to: '/contact' }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-gray-500 font-bold hover:text-green-500 transition-colors inline-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+2349138502947" className="flex items-center space-x-3 text-sm text-gray-500 hover:text-white transition-colors group">
                <Phone className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="font-bold">+234 913 850 2947</span>
              </a>
              <a href="mailto:Dremcxl@gmail.com" className="flex items-center space-x-3 text-sm text-gray-500 hover:text-white transition-colors group">
                <Mail className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="font-bold break-all">Dremcxl@gmail.com</span>
              </a>

              <a
                href="https://wa.me/2349138502947"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white font-black text-sm rounded-xl hover:bg-green-500 transition-all active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] font-black tracking-widest">
            © {currentYear} SOLAR DREMCXL.
          </p>
          <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest text-gray-600">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;