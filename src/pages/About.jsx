import { motion } from 'framer-motion';
import { Award, Users, Clock, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import { IMAGES } from '../utils/images';
import '../styles/theme.css';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Customers', color: 'green' },
    { icon: Clock, number: '5+', label: 'Years Exp', color: 'blue' },
    { icon: Award, number: '98%', label: 'Retention', color: 'green' },
    { icon: Target, number: '2MW+', label: 'Installed', color: 'blue' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white overflow-hidden"
    >
      {/* Hero Section - Bold Minimalism */}
      <section className="bg-gray-950 text-white pt-40 pb-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center space-x-3 mb-8">
              <span className="w-12 h-[2px] bg-green-500" />
              <span className="text-sm font-black uppercase tracking-[0.3em] text-green-500">About Us</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter">
              PIONEERING THE <br />
              <span className="text-gray-400">ENERGY FRONTIER.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-medium">
              Solar Dremcxl is redefining the renewable landscape in Nigeria,
              delivering world-class engineering solutions for a sustainable future.
            </p>
          </motion.div>
        </div>

        {/* Large Background Decorative Text */}
        <div className="absolute bottom-0 right-0 p-10 select-none pointer-events-none opacity-[0.02] translate-y-1/2">
          <span className="text-[30rem] font-black leading-none uppercase tracking-tighter">DREMCXL</span>
        </div>
      </section>

      {/* Story Section - Creative & Asymmetric */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Visual Column */}
            <div className="lg:col-span-12 xl:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="rounded-[48px] overflow-hidden shadow-2xl">
                  <ImagePlaceholder
                    src={IMAGES.about.team}
                    alt="Solar Dremcxl team of certified engineers"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-1000"
                  />
                </div>

                {/* Independent Stat Tag */}
                <div className="absolute -bottom-10 -right-6 md:-right-10 bg-green-600 p-8 rounded-[40px] text-white shadow-2xl max-w-[240px]">
                  <div className="text-4xl font-black mb-1">2019</div>
                  <div className="text-xs font-bold opacity-80 uppercase tracking-widest leading-tight">The year we began our engineering odyssey.</div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-50 rounded-full -z-10" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-12 xl:col-span-7 xl:pl-16 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                  OUR JOURNEY TO <br />
                  <span className="text-green-600">EXCELLENCE</span>
                </h2>

                <div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed max-w-2xl">
                  <p>
                    Founded by a team of visionary electrical engineers, Solar Dremcxl
                    emerged from a simple yet powerful mission: to make clean,
                    uninterrupted power accessible to every corner of Nigeria.
                  </p>
                  <p>
                    From our first residential installation to large-scale
                    industrial projects, we have maintained an uncompromising
                    standard of technical precision and customer-first service.
                  </p>
                </div>

                {/* Pull Quote */}
                <div className="border-l-4 border-green-500 pl-8 py-4">
                  <p className="text-2xl font-bold text-gray-900 italic max-w-xl">
                    "We don't just install panels; we engineer sustainable futures."
                  </p>
                  <p className="mt-4 text-sm font-black uppercase tracking-widest text-gray-400">— Engineering Lead, Solar Dremcxl</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - High Contrast */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`p-4 rounded-2xl w-fit mb-6 transition-colors ${stat.color === 'green' ? 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Clean & Powerful */}
      <section className="py-32 bg-gray-950 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 uppercase tracking-[0.3em] text-[10px] font-black">
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              DEMOCRATIZING <br />
              <span className="text-green-500">CLEAN ENERGY.</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
              Our vision is to provide every Nigerian family and enterprise
              with the security of sustainable, reliable, and cost-effective power.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { title: 'Quality', text: 'Tier-1 components only, zero compromise.' },
                { title: 'Reliability', text: '98% retention and 24/7 technical support.' },
                { title: 'Innovation', text: 'Smart monitoring and load-optimized designs.' }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-16">
              <button className="inline-flex items-center space-x-4 px-12 py-5 rounded-full bg-green-600 text-white font-black text-lg hover:bg-green-500 transition-all shadow-2xl shadow-green-600/30 active:scale-95 group">
                <span>WORK WITH US</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Background Decorative Gradient Substitute (Solid Blur) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500 rounded-full blur-[200px]" />
        </div>
      </section>
    </motion.div>
  );
};

export default About;