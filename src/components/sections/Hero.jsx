import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, Zap, Shield, Award } from 'lucide-react';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { IMAGES, IMAGE_DESCRIPTIONS } from '../../utils/images';
import '../../styles/theme.css';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 pt-3 sm:px-6 lg:px-8" style={{ background: 'var(--gradient-hero)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'var(--green-500)', opacity: 0.1 }}></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'var(--green-400)', opacity: 0.15, animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, var(--green-500), var(--green-300))', opacity: 0.08 }}></div>
      </div>

      <div className="container relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <motion.div 
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 rounded-full px-4 sm:px-6 py-2 sm:py-3 glass"
              style={{ backgroundColor: 'var(--green-100)', border: '1px solid var(--green-200)' }}
            >
              <Award className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: 'var(--energy-green)' }} />
              <span className="text-sm sm:text-base font-semibold tracking-wide" style={{ color: 'var(--energy-green-dark)' }}>Nigeria's Premier Solar Solutions</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div className="space-y-6">
              <motion.h1 
                className="text-responsive-xl font-black leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block text-gradient-primary"
                >
                  CLEAN ENERGY
                </motion.span>
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="block"
                  style={{ color: 'var(--gray-800)' }}
                >
                  FOR NIGERIA
                </motion.span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="h-2 w-32 rounded-full"
                style={{ background: 'var(--gradient-primary)' }}
              />
            </motion.div>

            {/* Sophisticated Description */}
            <motion.p 
              className="text-xl lg:text-2xl leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{ color: 'var(--gray-600)', fontFamily: 'var(--font-primary)', letterSpacing: '0.01em' }}
            >
              Transform your home or business with our 
              <span className="font-bold" style={{ color: 'var(--energy-green)' }}> premium solar installations</span> and 
              <span className="font-bold" style={{ color: 'var(--energy-green-dark)' }}> inverter solutions</span>. 
              Experience reliable power while reducing costs by up to 
              <span className="font-black" style={{ color: 'var(--energy-green)' }}>90%</span>.
            </motion.p>

            {/* Key Features */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { icon: Zap, text: "24/7 Power Supply", color: 'var(--yellow-400)' },
                { icon: Shield, text: "10-Year Warranty", color: 'var(--energy-green)' },
                { icon: Award, text: "Certified Engineers", color: 'var(--energy-green-dark)' }
              ].map((feature, index) => (
                <div key={index} className="premium-card flex items-center space-x-3" style={{ backgroundColor: 'var(--white)', border: '1px solid var(--green-100)' }}>
                  <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                  <span className="font-semibold text-sm" style={{ color: 'var(--gray-700)' }}>{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Link 
                to="/contact" 
                className="btn-primary group pulse-glow"
              >
                <span className="relative z-10">Get Free Assessment</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="https://wa.me/2349138502947"
                className="glass px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105"
                style={{ backgroundColor: 'var(--white)', border: '2px solid var(--green-200)', color: 'var(--energy-green)' }}
              >
                <MessageCircle className="mr-3 h-5 w-5" style={{ color: 'var(--energy-green)' }} />
                WhatsApp Consultation
              </a>
              
              <a
                href="tel:+2349138502947"
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105"
                style={{ 
                  border: '2px solid var(--energy-green)', 
                  color: 'var(--energy-green)',
                  backgroundColor: 'transparent'
                }}
              >
                <Phone className="mr-3 h-5 w-5" />
                Emergency Hotline
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="premium-card relative p-8" style={{ backgroundColor: 'var(--white)', border: '1px solid var(--green-100)' }}>
                <ImagePlaceholder
                  src={IMAGES.hero.solarInstallation}
                  alt={IMAGE_DESCRIPTIONS.hero.solarInstallation}
                  fallbackText="Premium Solar Installation"
                  className="rounded-2xl shadow-2xl"
                />
                
                {/* Floating Stats Cards */}
                <motion.div 
                  className="absolute -top-4 -right-4 p-4 rounded-2xl shadow-xl float"
                  style={{ backgroundColor: 'var(--energy-green)', color: 'var(--white)' }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">90%</div>
                    <div className="text-xs opacity-90">Cost Reduction</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 p-4 rounded-2xl shadow-xl float"
                  style={{ backgroundColor: 'var(--white)', color: 'var(--energy-green)', border: '2px solid var(--energy-green)' }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs font-semibold">Power Supply</div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-3xl blur-xl" style={{ background: 'var(--gradient-primary)', opacity: 0.2 }} />
;            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;