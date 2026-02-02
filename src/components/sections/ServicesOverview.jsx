import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, Zap, Battery, Settings, ArrowRight } from 'lucide-react';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { IMAGES, IMAGE_DESCRIPTIONS } from '../../utils/images';

const ServicesOverview = () => {
  const services = [
    {
      icon: Zap,
      title: 'Solar Panel Installation',
      description: 'Enterprise-grade solar ecosystems meticulously calibrated to your unique energy profile and operational requirements.',
      image: IMAGES.services.solarInstallation,
      imageAlt: IMAGE_DESCRIPTIONS.services.solarInstallation,
    },
    {
      icon: Wrench,
      title: 'Expert Repairs',
      description: 'Precision engineering and same-day diagnosis for all inverter brands to restore your power quickly.',
      image: IMAGES.services.inverterRepair,
      imageAlt: IMAGE_DESCRIPTIONS.services.inverterRepair,
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Reliable lithium backup solutions for uninterrupted performance during outages or peak demand.',
      image: IMAGES.services.batteryServices,
      imageAlt: IMAGE_DESCRIPTIONS.services.batteryServices,
    },
    {
      icon: Settings,
      title: 'System Optimization',
      description: 'Regular maintenance and performance monitoring to ensure your solar system operates at peak efficiency.',
      image: IMAGES.services.maintenance,
      imageAlt: IMAGE_DESCRIPTIONS.services.maintenance,
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-widest uppercase"
          >
            Our Core Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight"
          >
            Future-Ready <span className="text-green-600">Energy Systems</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We provide comprehensive, high-efficiency solar and inverter solutions
            designed for reliability and long-term performance.
          </motion.p>
        </div>

        {/* Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                {/* Visual Section */}
                <div className="aspect-[16/9] overflow-hidden">
                  <ImagePlaceholder
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-green-50 rounded-2xl text-green-600">
                      <service.icon className="h-7 w-7" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-2 text-green-600 font-bold hover:space-x-4 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-green-600 transition-colors shadow-xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;