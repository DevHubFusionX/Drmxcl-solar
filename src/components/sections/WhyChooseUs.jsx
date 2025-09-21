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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center space-x-3 rounded-full px-6 py-3 mb-4" style={{ backgroundColor: 'var(--green-100)', border: '1px solid var(--green-200)' }}>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'var(--energy-green)' }}></div>
                <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'var(--energy-green-light)', animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'var(--energy-green-dark)', animationDelay: '0.2s' }}></div>
              </div>
              <span className="font-bold tracking-wider uppercase" style={{ color: 'var(--energy-green-dark)' }}>Excellence Redefined</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              <span style={{ color: 'var(--gray-800)' }}>WHY </span>
              <span className="text-gradient-primary">
                SOLAR Drmcxl
              </span>
              <br />
              <span className="text-gradient-accent">
                STANDS APART
              </span>
            </h2>

            <div className="flex justify-center space-x-2">
              <div className="w-10 h-2 rounded-full" style={{ background: 'var(--gradient-primary)' }}></div>
              <div className="w-10 h-2 rounded-full" style={{ background: 'var(--gradient-text-accent)' }}></div>
              <div className="w-10 h-2 rounded-full" style={{ background: 'var(--gradient-primary)' }}></div>
            </div>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--gray-600)', fontFamily: 'var(--font-primary)' }}>
              Our <span className="font-bold" style={{ color: 'var(--energy-green)' }}>unwavering commitment to engineering excellence</span>,
              combined with <span className="font-bold" style={{ color: 'var(--energy-green-dark)' }}>cutting-edge photovoltaic innovations</span> and
              <span className="font-bold" style={{ color: 'var(--gray-800)' }}>bespoke energy consultancy</span>, positions us as
              <span className="text-gradient-primary font-black">Nigeria's definitive authority</span>
              in sustainable energy transformation.
            </p>
          </motion.div>
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