import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import { IMAGES } from '../../utils/images';
import '../../styles/theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Johnson',
      role: 'Business Owner',
      location: 'Lagos Island',
      image: IMAGES.testimonials.customer1,
      rating: 5,
      text: 'Solar Dremcxl transformed my business operations. Their 7kW installation eliminated our generator costs. The ROI was achieved in just 18 months!'
    },
    {
      name: 'Sarah Okafor',
      role: 'Homeowner',
      location: 'Abuja Garki',
      image: IMAGES.testimonials.customer2,
      rating: 5,
      text: 'When our inverter failed, their team had a technician at our home within 3 hours. Their emergency service is unmatched in reliability.'
    },
    {
      name: 'Michael Eze',
      role: 'Project Engineer',
      location: 'Port Harcourt',
      image: IMAGES.testimonials.customer3,
      rating: 5,
      text: 'As an engineer myself, I was impressed by their technical expertise. The monitoring app helps me track our 40% energy savings daily.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black tracking-[0.2em] uppercase"
          >
            <span>Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight"
          >
            Real Impact <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">From Real People</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col group"
            >
              {/* Rating & Quote */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <div className="p-3 bg-gray-50 rounded-2xl text-gray-400 group-hover:text-blue-500 transition-colors">
                  <Quote className="h-6 w-6" />
                </div>
              </div>

              {/* Text */}
              <blockquote className="text-lg text-gray-700 leading-relaxed font-medium italic mb-10 flex-grow">
                "{testimonial.text}"
              </blockquote>

              {/* Profile Bar */}
              <div className="flex items-center space-x-5 pt-8 border-t border-gray-50">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-lg border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="font-black text-gray-900 leading-tight">{testimonial.name}</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{testimonial.role}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      <MapPin className="h-2.5 w-2.5 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale"
        >
          {/* Faint partner/trust placeholder text */}
          <span className="text-sm font-black tracking-[0.3em] uppercase">Verified Installs</span>
          <span className="text-sm font-black tracking-[0.3em] uppercase">NERC Compliant</span>
          <span className="text-sm font-black tracking-[0.3em] uppercase">Premium Grade</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;