import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Award, Shield, Zap } from 'lucide-react';
import { HERO_BACKGROUNDS } from '../../utils/images';
import '../../styles/theme.css';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HERO_BACKGROUNDS[currentBg]})` }}
          />
        </AnimatePresence>
        {/* Dark/Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-[2]" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-4 sm:p-6 relative overflow-hidden"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center space-x-2 mb-6"
            >
              <Award className="h-4 w-4 text-green-400" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-green-300">Nigeria's Premier Solar Solutions</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">CLEAN ENERGY</span>
              <span className="block">FOR NIGERIA</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Switch to <span className="text-green-400 font-bold">Nigeria's most reliable</span> solar and inverter solutions. Reduce your bills by up to <span className="text-green-500 font-extrabold">90%</span> while enjoying 24/7 uninterrupted power for your home or business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link to="/contact" className="btn-primary space-x-2 group scale-105 active:scale-95 shadow-green-500/20">
                <span>Get Free Assessment</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+2349138502947" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 transition-all">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </motion.div>

            {/* Trust Bar */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {[
                { value: '500+', label: 'Installs', icon: Zap },
                { value: '10Yr', label: 'Warranty', icon: Shield },
                { value: '24/7', label: 'Support', icon: Award }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="text-xl sm:text-2xl font-black text-green-400">{stat.value}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-300 tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-green-400/80 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;