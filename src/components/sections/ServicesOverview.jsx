import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, Zap, Battery, Settings } from 'lucide-react';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { IMAGES, IMAGE_DESCRIPTIONS } from '../../utils/images';

const ServicesOverview = () => {
  const services = [
    {
      icon: Zap,
      title: 'Solar Panel Installation',
      description: 'Professional solar panel systems designed to maximize energy efficiency and reduce your electricity bills by up to 90%.',
      link: '/services#installation',
      image: IMAGES.services.solarInstallation,
      imageAlt: IMAGE_DESCRIPTIONS.services.solarInstallation
    },
    {
      icon: Wrench,
      title: 'Inverter Repair & Maintenance',
      description: 'Expert diagnosis and repair of all inverter brands with same-day service to restore your power supply quickly.',
      link: '/services#repairs',
      image: IMAGES.services.inverterRepair,
      imageAlt: IMAGE_DESCRIPTIONS.services.inverterRepair
    },
    {
      icon: Battery,
      title: 'Battery Solutions',
      description: 'High-capacity lithium and lead-acid battery installations for reliable backup power during outages.',
      link: '/services#battery',
      image: IMAGES.services.batteryServices,
      imageAlt: IMAGE_DESCRIPTIONS.services.batteryServices
    },
    {
      icon: Settings,
      title: 'System Optimization',
      description: 'Regular maintenance and performance monitoring to ensure your solar system operates at peak efficiency.',
      link: '/services#maintenance',
      image: IMAGES.services.maintenance,
      imageAlt: IMAGE_DESCRIPTIONS.services.maintenance
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Energy Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From initial consultation to ongoing maintenance, we provide end-to-end solar and inverter services 
            tailored to your specific energy requirements and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 mb-4">
                <ImagePlaceholder
                  src={service.image}
                  alt={service.imageAlt}
                  fallbackText={service.title}
                  aspectRatio="h-full"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <div className="text-green-600 mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;