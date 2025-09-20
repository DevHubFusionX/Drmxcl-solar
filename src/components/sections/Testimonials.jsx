import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Johnson',
      location: 'Lagos Business Owner',
      rating: 5,
      text: 'Solar Reckx transformed my business operations. Their 7kW installation eliminated our generator costs and power interruptions. The ROI was achieved in just 18 months!'
    },
    {
      name: 'Sarah Okafor',
      location: 'Abuja Homeowner',
      rating: 5,
      text: 'When our inverter failed during a family gathering, Solar Reckx had a technician at our home within 3 hours. Their emergency service is unmatched in reliability.'
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Real Results from Real Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how Solar Reckx has helped hundreds of Nigerian families and businesses 
            achieve energy independence and significant cost savings.
          </p>
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