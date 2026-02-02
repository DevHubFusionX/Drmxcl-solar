import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap, Home, Building, ArrowRight, RefreshCw, Calendar } from 'lucide-react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import ProjectDetailsModal from '../components/ui/ProjectDetailsModal';
import { IMAGES, IMAGE_DESCRIPTIONS } from '../utils/images';
import '../styles/theme.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'PREMIUM RESIDENTIAL LEKKI',
      type: 'Residential',
      location: 'Lekki Phase 1, Lagos',
      date: 'Dec 2024',
      capacity: '5kW Hybrid System',
      description: 'Luxury 4-bedroom duplex transformed with premium off-grid solar solution. Client achieved 95% reduction in NEPA dependency and significant monthly savings.',
      image: IMAGES.projects.residential1,
      imageAlt: IMAGE_DESCRIPTIONS.projects.residential1,
      features: ['MPPT Hybrid Inverter', '10kWh Lithium Bank', 'Smart Management']
    },
    {
      id: 2,
      title: 'CORPORATE HQ VICTORIA ISLAND',
      type: 'Commercial',
      location: 'Victoria Island, Lagos',
      date: 'Nov 2024',
      capacity: '15kW Grid-Tie System',
      description: 'Modern office complex serving 150+ employees now operates with 70% solar power. Advanced load management ensures seamless power transition.',
      image: IMAGES.projects.commercial1,
      imageAlt: IMAGE_DESCRIPTIONS.projects.commercial1,
      features: ['Tier-1 Solar Panels', 'Cloud Analytics', 'Backup Storage']
    },
    {
      id: 3,
      title: 'EMERGENCY INVERTER REPAIR',
      type: 'Repair',
      location: 'Ikeja GRA, Lagos',
      date: 'Nov 2024',
      capacity: '5kW System Upgrade',
      description: 'Critical inverter failure resolved within 4 hours. Complete system diagnostics revealed opportunity for capacity upgrade and efficiency gains.',
      image: IMAGES.projects.repair1,
      imageAlt: IMAGE_DESCRIPTIONS.projects.repair1,
      features: ['Circuit Board Repair', 'Lithium Upgrade', 'Safety Protection']
    },
    {
      id: 4,
      title: 'SUBURBAN SOLAR GWARINPA',
      type: 'Residential',
      location: 'Gwarinpa, Abuja',
      date: 'Oct 2024',
      capacity: '7kW Hybrid System',
      description: 'Full-home backup with automatic changeover and smart load management for a growing family in the heart of Abuja.',
      image: IMAGES.projects.residential2,
      imageAlt: IMAGE_DESCRIPTIONS.projects.residential2,
      features: ['12x 320W Panels', '15kWh Storage', 'Auto Changeover']
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Residential': return Home;
      case 'Commercial': return Building;
      case 'Repair': return Zap;
      case 'Maintenance': return RefreshCw;
      default: return Zap;
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* Editorial Hero - Massive Typography */}
      <section className="bg-gray-950 text-white pt-48 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl"
          >
            <div className="inline-flex items-center space-x-3 mb-10">
              <span className="w-12 h-[2px] bg-green-500" />
              <span className="text-sm font-black uppercase tracking-[0.4em] text-green-500">Case Studies</span>
            </div>

            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-12">
              POWERING <br />
              <span className="text-gray-500">PROGRESS.</span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-400 max-w-3xl leading-relaxed font-medium">
              We engineer bespoke energy solutions that drive real-world impact
              for Nigeria's most ambitious homeowners and enterprises.
            </p>
          </motion.div>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none -rotate-90 origin-right">
          <span className="text-[30rem] font-black leading-none uppercase tracking-tighter">IMPACT</span>
        </div>
      </section>

      {/* Editorial Journal Feed */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-48">
            <AnimatePresence mode='popLayout'>
              {projects.map((project, index) => {
                const Icon = getTypeIcon(project.type);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Project Image - Massively Sized */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="group relative rounded-[64px] overflow-hidden shadow-2xl">
                        <ImagePlaceholder
                          src={project.image}
                          alt={project.imageAlt}
                          className="w-full aspect-video object-cover transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gray-950/10 group-hover:bg-gray-950/0 transition-all duration-700" />

                        {/* Internal Label */}
                        <div className="absolute bottom-10 left-10">
                          <div className="px-8 py-4 bg-white/95 backdrop-blur shadow-2xl rounded-3xl flex items-center space-x-4 border border-gray-100">
                            <Icon className="h-5 w-5 text-green-600" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-900">{project.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`lg:col-span-5 space-y-10 ${isEven ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-[0.4em] text-green-600">
                          <span>{project.location}</span>
                          <span className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
                          <span>{project.date}</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase whitespace-pre-line">
                          {project.title}
                        </h2>

                        <p className="text-xl text-gray-500 font-medium leading-relaxed italic">
                          "{project.description}"
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <Zap className="h-6 w-6 text-green-500" />
                          <div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Project Capacity</div>
                            <div className="text-lg font-black text-gray-900">{project.capacity}</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {project.features.map((feat, i) => (
                            <span key={i} className="px-4 py-2 bg-gray-50 rounded-xl text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-gray-100">
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={() => openProjectModal(project)}
                          className="flex items-center space-x-4 text-xs font-black text-gray-900 uppercase tracking-[0.4em] group"
                        >
                          <span>EXPLORE REQUISITES</span>
                          <div className="w-10 h-10 rounded-full bg-gray-950 text-white flex items-center justify-center transition-transform group-hover:translate-x-2">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ProjectDetailsModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Editorial CTA */}
      <section className="py-48 bg-gray-950 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-16">
              YOUR PROJECT <br />
              <span className="text-green-500">IS NEXT.</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
              We bring the same level of engineering precision to every single
              installation, ensuring your switch to solar is seamless and permanent.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
              <a
                href="https://wa.me/2349138502947"
                className="px-16 py-6 rounded-full bg-green-600 text-white font-black text-xl hover:bg-green-500 transition-all shadow-2xl shadow-green-600/30 active:scale-95 group flex items-center space-x-4"
              >
                <span>INITIATE PROJECT</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+2349138502947"
                className="text-white font-black text-xl uppercase tracking-[0.3em] hover:text-green-500 transition-colors"
              >
                CALL OUR TEAM
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Blur Background (Solid) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.05]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500 rounded-full blur-[300px]" />
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;