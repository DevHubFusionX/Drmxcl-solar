import { motion } from 'framer-motion';
import { Clock, Shield, DollarSign, Users, CheckCircle2 } from 'lucide-react';
import '../../styles/theme.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Emergency repairs within 24 hours and scheduled installations completed on time, every time.',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Reliable Warranty',
      description: 'Over 5 years of proven expertise with certified engineers and a comprehensive 10-year coverage.',
      color: 'blue'
    },
    {
      icon: DollarSign,
      title: 'Fair Pricing',
      description: 'Upfront pricing with detailed quotes, flexible payment plans, and zero hidden charges.',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Comprehensive technical support and maintenance to maximize your long-term energy investment.',
      color: 'blue'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-green-500 blur-[120px]" />
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[30%] rounded-full bg-blue-500 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 uppercase tracking-widest text-[10px] font-black text-green-600">
                <CheckCircle2 className="h-3 w-3" />
                <span>The Dremcxl Standard</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1]">
                WHY <span className="text-green-600">DREMCXL</span> STANDS APART
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Our unwavering commitment to engineering excellence and
                cutting-edge photovoltaic innovations makes us Nigeria's
                definitive authority in sustainable energy transformation.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="text-3xl font-black text-gray-900 mb-1">500+</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">PROJECTS DONE</div>
                </div>
                <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="text-3xl font-black text-green-600 mb-1">100%</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">RELIABILITY</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-500/5 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`p-4 rounded-2xl w-fit mb-6 transition-colors duration-500 ${feature.color === 'green' ? 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;