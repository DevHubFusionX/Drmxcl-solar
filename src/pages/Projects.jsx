import { motion } from 'framer-motion';
import { Calendar, MapPin, Zap, Home, Building } from 'lucide-react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { IMAGES, IMAGE_DESCRIPTIONS } from '../utils/images';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Premium Residential Solar System - Lekki Phase 1',
      type: 'Residential',
      location: 'Lekki Phase 1, Lagos',
      date: 'December 2024',
      capacity: '5kW Hybrid Solar System',
      description: 'Luxury 4-bedroom duplex transformed with premium off-grid solar solution. Client achieved 95% reduction in NEPA dependency and ₦180,000 monthly savings on electricity bills.',
      image: IMAGES.projects.residential1,
      imageAlt: IMAGE_DESCRIPTIONS.projects.residential1,
      features: ['8 x 320W Monocrystalline Panels', '5kW MPPT Hybrid Inverter', '10kWh Lithium-Ion Battery Bank', 'Smart Home Energy Management System']
    },
    {
      id: 2,
      title: 'Corporate Headquarters Solar Installation - Victoria Island',
      type: 'Commercial',
      location: 'Victoria Island, Lagos',
      date: 'November 2024',
      capacity: '15kW Grid-Tie Solar System',
      description: 'Modern office complex serving 150+ employees now operates with 70% solar power. Advanced load management system ensures seamless power transition and ₦450,000 monthly cost savings.',
      image: IMAGES.projects.commercial1,
      imageAlt: IMAGE_DESCRIPTIONS.projects.commercial1,
      features: ['24 x 320W Tier-1 Solar Panels', '15kW Three-Phase Grid-Tie Inverter', '20kWh Emergency Battery Backup', 'Cloud-Based Monitoring & Analytics']
    },
    {
      id: 3,
      title: 'Emergency Inverter Restoration & System Upgrade - Ikeja GRA',
      type: 'Repair',
      location: 'Ikeja GRA, Lagos',
      date: 'November 2024',
      capacity: '3kW to 5kW System Upgrade',
      description: 'Critical inverter failure resolved within 4 hours of emergency call. Complete system diagnostics revealed opportunity for capacity upgrade, extending backup time from 6 to 12 hours.',
      image: IMAGES.projects.repair1,
      imageAlt: IMAGE_DESCRIPTIONS.projects.repair1,
      features: ['Advanced Circuit Board Repair', 'Capacity Upgrade to 5kW', 'New 200Ah Lithium Battery Bank', 'Enhanced Safety Protection Systems']
    },
    {
      id: 4,
      title: 'Solar Installation - Abuja Residence',
      type: 'Residential',
      location: 'Gwarinpa, Abuja',
      date: 'October 2024',
      capacity: '7kW Solar System',
      description: 'Hybrid solar system installation for family home with automatic changeover and backup power.',
      image: IMAGES.projects.residential2,
      imageAlt: IMAGE_DESCRIPTIONS.projects.residential2,
      features: ['12 x 320W Solar Panels', '7kW Hybrid Inverter', '15kWh Battery Bank', 'Automatic Changeover']
    },
    {
      id: 5,
      title: 'Small Business Solar Setup - Port Harcourt',
      type: 'Commercial',
      location: 'Port Harcourt, Rivers',
      date: 'September 2024',
      capacity: '10kW Solar System',
      description: 'Solar power solution for small manufacturing business to reduce electricity costs and ensure reliable power.',
      image: IMAGES.projects.commercial2,
      imageAlt: IMAGE_DESCRIPTIONS.projects.commercial2,
      features: ['18 x 320W Solar Panels', '10kW Three-Phase Inverter', '25kWh Battery Storage', 'Load Management System']
    },
    {
      id: 6,
      title: 'Battery Replacement Project - Surulere',
      type: 'Maintenance',
      location: 'Surulere, Lagos',
      date: 'September 2024',
      capacity: 'Battery Upgrade',
      description: 'Replaced old lead-acid batteries with new lithium-ion battery bank for improved performance and longevity.',
      image: IMAGES.projects.maintenance1,
      imageAlt: IMAGE_DESCRIPTIONS.projects.maintenance1,
      features: ['Lithium Battery Installation', 'System Reconfiguration', 'Performance Testing', 'Warranty Coverage']
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Residential':
        return Home;
      case 'Commercial':
        return Building;
      case 'Repair':
        return Zap;
      case 'Maintenance':
        return Zap;
      default:
        return Zap;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Residential':
        return 'bg-blue-100 text-blue-800';
      case 'Commercial':
        return 'bg-green-100 text-green-800';
      case 'Repair':
        return 'bg-yellow-100 text-yellow-800';
      case 'Maintenance':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Excellence in Action
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover our portfolio of transformative energy solutions across Nigeria.
              From residential rooftops to commercial complexes, witness how we've delivered
              measurable results and lasting value to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const TypeIcon = getTypeIcon(project.type);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Project Image */}
                  <div className="relative">
                    <ImagePlaceholder
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackText={project.title}
                      aspectRatio="aspect-[4/3]"
                      className="rounded-t-xl"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(project.type)} backdrop-blur-sm`}>
                        <TypeIcon className="h-4 w-4 mr-1" />
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {project.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{project.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Zap className="h-4 w-4 mr-2" />
                        <span className="text-sm font-semibold">{project.capacity}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied customers. Contact us today to discuss
              your solar and inverter needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/234"
                className="btn-primary"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+234"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Call for Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;