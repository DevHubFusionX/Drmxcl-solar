import { motion } from 'framer-motion';
import { Clock, Shield, DollarSign, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: 'Rapid Response Service',
      description: 'Emergency repairs within 24 hours and scheduled installations completed on time, every time.'
    },
    {
      icon: Shield,
      title: 'Certified Excellence',
      description: 'Over 5 years of proven expertise with certified engineers and a 100% customer satisfaction guarantee.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Upfront pricing with detailed quotes, flexible payment plans, and no surprise charges.'
    },
    {
      icon: Users,
      title: 'Lifetime Support',
      description: 'Comprehensive warranty coverage and ongoing technical support to maximize your investment.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Solar Reckx Stands Apart
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence, combined with cutting-edge technology and personalized service, 
            makes us Nigeria's trusted partner for sustainable energy solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;