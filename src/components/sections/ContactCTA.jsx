import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, ArrowRight, Zap } from 'lucide-react';
import '../../styles/theme.css';

const ContactCTA = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-green-600/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-blue-600/10 blur-[120px]" />

        {/* Large Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.02]">
          <span className="text-[30rem] font-black uppercase tracking-tighter">Energy</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Pulsing Zap Icon */}
            <div className="w-20 h-20 rounded-[30px] bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
              <Zap className="h-10 w-10 text-green-400 animate-pulse" />
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              READY TO POWER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">YOUR FUTURE?</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Join 500+ satisfied customers who have unlocked energy independence.
              Get your <span className="text-white font-bold">free assessment</span> today and start saving.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center pt-8">
              <Link
                to="/contact"
                className="group relative px-12 py-5 rounded-full bg-green-600 text-white font-black text-lg hover:bg-green-500 transition-all shadow-2xl shadow-green-600/30 flex items-center space-x-3 active:scale-95"
              >
                <span>GET FREE ASSESSMENT</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center space-x-8">
                <a
                  href="https://wa.me/2349138502947"
                  className="group flex flex-col items-center space-y-1 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-[10px] font-black uppercase tracking-widest pt-1">WHATSAPP</span>
                </a>

                <div className="w-[1px] h-8 bg-gray-800" />

                <a
                  href="tel:+2349138502947"
                  className="group flex flex-col items-center space-y-1 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  <span className="text-[10px] font-black uppercase tracking-widest pt-1">CALL US</span>
                </a>
              </div>
            </div>

            {/* Faint Trust Text */}
            <div className="pt-16 flex items-center space-x-4 opacity-30">
              <span className="w-8 h-[1px] bg-white" />
              <span className="text-xs font-bold text-white uppercase tracking-[0.4em]">Nigeria's Definitive Authority</span>
              <span className="w-8 h-[1px] bg-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;