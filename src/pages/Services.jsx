import { motion } from 'framer-motion';
import { Zap, Wrench, Battery, Settings, Home, Building, CheckCircle } from 'lucide-react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { IMAGES, IMAGE_DESCRIPTIONS } from '../utils/images';

const Services = () => {
  const services = [
    {
      id: 'installation',
      icon: Zap,
      title: 'Solar Panel Installation',
      description: 'Professional solar panel systems engineered to maximize energy production and minimize your electricity costs',
      features: [
        'Custom residential solar designs up to 20kW capacity',
        'Commercial installations with monitoring systems',
        'Grid-tie systems with net metering capability',
        'Off-grid solutions with battery backup',
        'Complete permitting and utility interconnection'
      ],
      image: IMAGES.services.solarInstallation,
      imageAlt: IMAGE_DESCRIPTIONS.services.solarInstallation
    },
    {
      id: 'repairs',
      icon: Wrench,
      title: 'Inverter Repair & Diagnostics',
      description: 'Advanced diagnostic and repair services for all inverter brands with guaranteed same-day emergency response',
      features: [
        'Support for 50+ inverter brands including Luminous, Su-Kam, and Felicity',
        'Emergency repairs within 4 hours of call',
        'Advanced circuit board diagnostics and repair',
        'Genuine component replacement with warranty',
        'Performance testing and efficiency optimization'
      ],
      image: IMAGES.services.inverterRepair,
      imageAlt: IMAGE_DESCRIPTIONS.services.inverterRepair
    },
    {
      id: 'battery',
      icon: Battery,
      title: 'Battery Solutions & Management',
      description: 'High-performance battery systems designed for maximum backup time and longevity with smart monitoring',
      features: [
        'Premium lithium-ion batteries with 10-year lifespan',
        'Deep-cycle lead-acid options for budget-conscious customers',
        'Custom battery bank configurations up to 100kWh',
        'Smart battery management systems with mobile app',
        'Professional installation with safety certifications'
      ],
      image: IMAGES.services.batteryServices,
      imageAlt: IMAGE_DESCRIPTIONS.services.batteryServices
    },
    {
      id: 'maintenance',
      icon: Settings,
      title: 'System Maintenance & Optimization',
      description: 'Comprehensive maintenance programs to ensure peak system performance and extend equipment lifespan',
      features: [
        'Quarterly performance audits and system health checks',
        'Real-time monitoring with automated alerts',
        'Professional panel cleaning and connection tightening',
        'Firmware updates and system capacity upgrades',
        '24/7 emergency support with 2-hour response time'
      ],
      image: IMAGES.services.maintenance,
      imageAlt: IMAGE_DESCRIPTIONS.services.maintenance
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-green-600 text-white section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Energy Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your energy consumption with our comprehensive solar and inverter services. 
              We deliver customized solutions that reduce costs, increase reliability, and support sustainable living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-green-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn-primary">
                    Request Service
                  </button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
                    <ImagePlaceholder
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackText={service.title}
                      className="rounded-xl shadow-lg mb-4"
                    />
                    <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                      <service.icon className="h-12 w-12 text-green-600 mx-auto" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
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
              Trusted Across All Sectors
            </h2>
            <p className="text-xl text-gray-600">
              From family homes to large enterprises, we deliver scalable energy solutions 
              tailored to your specific power requirements and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <Home className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Residential Solutions</h3>
              <p className="text-gray-600">
                Complete home energy systems including rooftop solar installations, 
                backup inverters, and battery storage. Reduce your NEPA bills by up to 90% 
                while ensuring uninterrupted power for your family.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <Building className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Commercial & Industrial</h3>
              <p className="text-gray-600">
                Scalable business energy solutions from small offices to manufacturing facilities. 
                Our commercial systems include load management, remote monitoring, and 
                guaranteed uptime to keep your operations running smoothly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;