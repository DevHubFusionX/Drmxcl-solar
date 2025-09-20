import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/ServicesOverview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </motion.div>
  );
};

export default Home;