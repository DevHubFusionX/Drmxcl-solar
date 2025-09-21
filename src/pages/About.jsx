import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { IMAGES } from '../utils/images';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Satisfied Customers' },
    { icon: Clock, number: '5+', label: 'Years of Excellence' },
    { icon: Award, number: '98%', label: 'Customer Retention' },
    { icon: Target, number: '2MW+', label: 'Solar Capacity Installed' }
  ];

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
              Pioneering Nigeria's Energy Independence
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Solar Drmcxl is leading the renewable energy revolution in Nigeria, empowering homes and businesses
              with cutting-edge solar technology and unmatched technical expertise since 2019.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Journey to Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019 by a team of electrical engineers passionate about sustainable energy,
                Solar Drmcxl emerged from a vision to make clean, reliable power accessible to every Nigerian.
                What started as a small technical service company has grown into one of Nigeria's most
                trusted renewable energy providers, serving over 500 satisfied customers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our certified engineering team combines international training with deep local knowledge
                of Nigeria's unique power challenges. We've successfully completed installations ranging
                from 1kW residential systems to 50kW commercial projects, always delivering on our promise
                of quality, reliability, and exceptional after-sales support.
              </p>
              <p className="text-lg text-gray-600">
                Today, Solar Drmcxl stands as a testament to Nigerian innovation and excellence.
                Our commitment to using only premium components, providing transparent pricing,
                and maintaining the highest safety standards has earned us recognition as an industry leader.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
                <ImagePlaceholder
                  src={IMAGES.about.team}
                  alt="Solar Drmcxl team of certified engineers and technicians"
                  fallbackText="Our Expert Team"
                  aspectRatio="aspect-square"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Measurable Impact Across Nigeria
            </h2>
            <p className="text-xl text-gray-600">
              Our track record of excellence speaks through the lives we've transformed
              and the sustainable energy solutions we've delivered nationwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              "To democratize access to clean, reliable energy across Nigeria by delivering world-class
              solar solutions that reduce costs, increase energy security, and contribute to a sustainable future
              for generations to come."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Uncompromising Quality</h3>
                <p className="text-gray-600">
                  We source only Tier-1 solar panels and premium components,
                  backed by comprehensive warranties and rigorous testing standards.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Reliability</h3>
                <p className="text-gray-600">
                  Our 98% customer retention rate and 24/7 support network
                  ensure your investment is protected for decades to come.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Innovation</h3>
                <p className="text-gray-600">
                  We integrate the latest smart monitoring technology and
                  energy management systems to maximize your solar investment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;