import { motion } from 'framer-motion';
import { Zap, Wrench, Battery, Settings, Home, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { IMAGES, IMAGE_DESCRIPTIONS } from '../utils/images';
import '../styles/theme.css';

const Services = () => {
  const services = [
    {
      id: 'installation',
      icon: Zap,
      title: 'Solar Panel Installation',
      description: 'Enterprise-grade solar ecosystems meticulously calibrated to your unique energy profile and operational requirements.',
      features: [
        'Custom residential solar designs up to 20kW capacity',
        'Commercial installations with monitoring systems',
        'Grid-tie systems with net metering capability',
        'Off-grid solutions with battery backup',
        'Complete permitting and utility interconnection'
      ],
      image: IMAGES.services.solarInstallation,
      imageAlt: IMAGE_DESCRIPTIONS.services.solarInstallation,
      theme: 'green'
    },
    {
      id: 'repairs',
      icon: Wrench,
      title: 'Expert Inverter Repairs',
      description: 'Precision engineering and same-day diagnosis for all inverter brands. We restore your power with factory-grade components.',
      features: [
        'Support for 50+ inverter brands (Luminous, Felicity, etc.)',
        'Emergency repairs within 4 hours of call',
        'Advanced circuit board diagnostics and repair',
        'Genuine component replacement with warranty',
        'Performance testing and efficiency optimization'
      ],
      image: IMAGES.services.inverterRepair,
      imageAlt: IMAGE_DESCRIPTIONS.services.inverterRepair,
      theme: 'blue'
    },
    {
      id: 'battery',
      icon: Battery,
      title: 'Energy Storage Solutions',
      description: 'High-performance battery systems designed for maximum backup time and longevity with smart monitoring technology.',
      features: [
        'Premium lithium-ion batteries with 10-year lifespan',
        'Deep-cycle lead-acid options for budget flexibility',
        'Custom battery bank configurations up to 100kWh',
        'Smart battery management systems with mobile app',
        'Professional installation with safety certifications'
      ],
      image: IMAGES.services.batteryServices,
      imageAlt: IMAGE_DESCRIPTIONS.services.batteryServices,
      theme: 'green'
    },
    {
      id: 'maintenance',
      icon: Settings,
      title: 'System Optimization',
      description: 'Comprehensive maintenance programs to ensure peak system performance and extend your equipment lifespan.',
      features: [
        'Quarterly performance audits and health checks',
        'Real-time monitoring with automated alerts',
        'Professional panel cleaning and connection tightening',
        'Firmware updates and system capacity upgrades',
        '24/7 emergency support with prioritized response'
      ],
      image: IMAGES.services.maintenance,
      imageAlt: IMAGE_DESCRIPTIONS.services.maintenance,
      theme: 'blue'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* Hero Section - Minimal & Bold */}
      <section className="bg-gray-950 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-[120px] -mr-48 -mt-48" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-3 mb-8">
              <span className="w-12 h-[2px] bg-green-500" />
              <span className="text-sm font-black uppercase tracking-[0.3em] text-green-500">Service Catalog</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              ENGINEERED FOR <br />
              <span className="text-gray-400">EXCELLENCE.</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-medium">
              We deliver high-efficiency solar and inverter solutions
              designed for reliability, performance, and long-term energy independence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                {/* Content Area */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-3xl ${service.theme === 'green' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                        <service.icon className="h-8 w-8" />
                      </div>
                      <span className="text-sm font-black text-gray-300 tracking-widest uppercase">0{index + 1} / Professional</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-lg text-gray-500 leading-relaxed font-medium">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                          <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${service.theme === 'green' ? 'text-green-500' : 'text-blue-500'}`} />
                          <span className="text-sm font-bold text-gray-600 leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <button className={`flex items-center space-x-4 px-8 py-4 rounded-full font-black text-white transition-all active:scale-95 shadow-xl ${service.theme === 'green' ? 'bg-green-600 shadow-green-600/20 hover:bg-green-700' : 'bg-gray-900 shadow-gray-900/20 hover:bg-black'
                        }`}>
                        <span>REQUEST SERVICE</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Area */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative group">
                    {/* Decorative Frame */}
                    <div className="absolute -inset-4 bg-gray-50 rounded-[40px] -z-10 transition-transform group-hover:scale-[1.02]" />

                    <div className="rounded-[32px] overflow-hidden shadow-2xl">
                      <ImagePlaceholder
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>

                    {/* Floating Trust Badge */}
                    <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[32px] shadow-2xl border border-gray-50 hidden md:block">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Guaranteed</span>
                          <span className="text-lg font-black text-gray-900 leading-none">Reliability</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Solutions - Clean & Simple */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tighter">
                TRUSTED ACROSS <br />
                <span className="text-green-500">ALL SECTORS.</span>
              </h2>
              <p className="text-lg text-gray-400 font-medium">
                Tailored energy solutions for every requirement and budget.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 rounded-[48px] bg-gray-900 border border-gray-800 group hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-3xl bg-green-500/10 flex items-center justify-center mb-8 border border-green-500/20">
                <Home className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">Residential</h3>
              <p className="text-gray-400 leading-relaxed font-medium mb-8">
                Complete home energy systems including rooftop solar, backup inverters,
                and battery storage. Reduce NEPA bills by up to 90% while ensuring
                uninterrupted power for your family.
              </p>
              <div className="w-12 h-[2px] bg-green-500" />
            </div>

            <div className="p-12 rounded-[48px] bg-gray-900 border border-gray-800 group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                <Building className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">Commercial</h3>
              <p className="text-gray-400 leading-relaxed font-medium mb-8">
                Scalable business solutions from offices to manufacturing.
                Our systems include load management and remote monitoring
                to keep your operations running smooth 24/7.
              </p>
              <div className="w-12 h-[2px] bg-blue-500" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;