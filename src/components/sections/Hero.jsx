import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { IMAGES, IMAGE_DESCRIPTIONS } from '../../utils/images';

const Hero = () => {
  return (
    <section className="hero-gradient text-white section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block"
              >
                Power Your Future
              </motion.span>
              <br />
              <motion.span
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block"
              >
                with Clean Energy
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Transform your home or business with our expert solar installations and inverter solutions. 
              Experience uninterrupted power supply while reducing your electricity costs and carbon footprint.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-secondary inline-flex items-center">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <a
                href="https://wa.me/234"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
              
              <a
                href="tel:+234"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <ImagePlaceholder
                src={IMAGES.hero.solarInstallation}
                alt={IMAGE_DESCRIPTIONS.hero.solarInstallation}
                fallbackText="Solar Installation"
                className="rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;