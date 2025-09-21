import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Johnson',
      location: 'Lagos Business Owner',
      rating: 5,
      text: 'Solar Drmcxl transformed my business operations. Their 7kW installation eliminated our generator costs and power interruptions. The ROI was achieved in just 18 months!'
    },
    {
      name: 'Sarah Okafor',
      location: 'Abuja Homeowner',
      rating: 5,
      text: 'When our inverter failed during a family gathering, Solar Drmcxl had a technician at our home within 3 hours. Their emergency service is unmatched in reliability.'
    },
    {
      name: 'Michael Eze',
      location: 'Port Harcourt Engineer',
      rating: 5,
      text: 'As an engineer myself, I was impressed by their technical expertise and attention to detail. The system monitoring app helps me track our 40% energy savings daily.'
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 mb-4" style={{ backgroundColor: 'var(--green-100)', border: '1px solid var(--green-200)' }}>
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'var(--energy-green)' }}></div>
              <span className="font-bold tracking-wide uppercase" style={{ color: 'var(--energy-green-dark)' }}>Customer Success</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="text-gradient-primary">
                REAL RESULTS
              </span>
              <br />
              <span style={{ color: 'var(--gray-800)' }}>FROM REAL CUSTOMERS</span>
            </h2>

            <div className="w-32 h-2 rounded-full mx-auto" style={{ background: 'var(--gradient-primary)' }}></div>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--gray-600)', fontFamily: 'var(--font-primary)' }}>
              Discover how Solar Drmcxl has helped <span className="font-bold" style={{ color: 'var(--energy-green)' }}>hundreds of Nigerian families</span> and
              <span className="font-bold" style={{ color: 'var(--energy-green-dark)' }}>businesses achieve energy independence</span> with
              <span className="font-bold" style={{ color: 'var(--gray-800)' }}>significant cost savings</span>.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-green-600 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;