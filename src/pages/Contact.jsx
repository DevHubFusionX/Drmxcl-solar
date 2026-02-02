import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowRight, Shield, Clock } from 'lucide-react';
import '../styles/theme.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Solar Dremcxl,\n\nI'm interested in your services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage: ${formData.message}\n\nPlease get back to me. Thank you!`;
    const whatsappUrl = `https://wa.me/2349138502947?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Voice Line',
      details: '+234 913 850 2947',
      action: 'tel:+2349138502947',
      sub: 'Mon - Sat (8am - 6pm)'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: 'Instant Support Chat',
      action: 'https://wa.me/2349138502947',
      sub: 'Fastest Response'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'Dremcxl@gmail.com',
      action: 'mailto:Dremcxl@gmail.com',
      sub: 'Official Inquiries'
    }
  ];

  const services = [
    'Residential Solar',
    'Commercial Solar',
    'Inverter Repair',
    'Battery Solutions',
    'Maintenance',
    'Energy Audit'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Editorial Hero */}
      <section className="bg-gray-950 text-white pt-48 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-3 mb-10">
              <span className="w-12 h-[2px] bg-green-500" />
              <span className="text-sm font-black uppercase tracking-[0.4em] text-green-500">Get in Touch</span>
            </div>

            <h1 className="text-7xl md:text-[8rem] font-black leading-[0.8] tracking-tighter mb-12 uppercase">
              LET'S ENGINEER <br />
              <span className="text-gray-500">YOUR FUTURE.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-medium">
              Ready to break free from the grid? Our engineers are standing by
              to design your custom energy ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none -rotate-90 origin-right">
          <span className="text-[30rem] font-black leading-none uppercase tracking-tighter">CONTACT</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

            {/* Left: Contact Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-16">
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-4">Initial Assessment</h2>
                <p className="text-gray-500 font-medium text-lg italic">"Tell us about your project requirements and we'll get back to you within 24 hours."</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Fanya Adebayo"
                      className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-4 focus:border-green-500 transition-colors outline-none font-bold text-gray-900 placeholder:text-gray-200 placeholder:font-normal"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Phone Connection</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 ..."
                      className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-4 focus:border-green-500 transition-colors outline-none font-bold text-gray-900 placeholder:text-gray-200 placeholder:font-normal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-4 focus:border-green-500 transition-colors outline-none font-bold text-gray-900 placeholder:text-gray-200 placeholder:font-normal"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-4 focus:border-green-500 transition-colors outline-none font-bold text-gray-900 appearance-none bg-transparent"
                    >
                      <option value="">Select Service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Brief Narrative</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your current energy situation..."
                    className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-4 focus:border-green-500 transition-colors outline-none font-bold text-gray-900 placeholder:text-gray-200 placeholder:font-normal resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-6 bg-gray-950 text-white font-black uppercase tracking-[0.4em] text-sm hover:bg-green-600 transition-all rounded-2xl flex items-center justify-center group active:scale-[0.98]"
                >
                  <span>Transmit Request</span>
                  <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Right: Info Panels */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-green-600 mb-8 flex items-center">
                    <span className="w-8 h-[1px] bg-green-600 mr-4" />
                    Direct Channels
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, i) => (
                      <a
                        key={i}
                        href={info.action}
                        target={info.title === 'WhatsApp' ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="group flex items-center space-x-6 p-8 bg-gray-50 rounded-[32px] border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all"
                      >
                        <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{info.title}</p>
                          <p className="font-black text-gray-900 text-lg">{info.details}</p>
                          <p className="text-xs font-medium text-gray-400">{info.sub}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Trust Cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-green-50 rounded-[32px] border border-green-100">
                    <Shield className="h-8 w-8 text-green-600 mb-4" />
                    <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-2">Verified</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Licensed Engineers</p>
                  </div>
                  <div className="p-8 bg-blue-50 rounded-[32px] border border-blue-100">
                    <Clock className="h-8 w-8 text-blue-600 mb-4" />
                    <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-2">Support</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">24/7 Technical Aid</p>
                  </div>
                </div>

                <div className="p-10 bg-gray-950 rounded-[40px] text-center">
                  <MapPin className="h-10 w-10 text-green-500 mx-auto mb-6" />
                  <h4 className="text-white font-black uppercase tracking-widest mb-2">Lagos HQ</h4>
                  <p className="text-gray-400 text-sm font-medium">Serving All of Nigeria from the heart of Lagos.</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Map or Post-Script Editorial */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="rounded-[64px] bg-gray-50 p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-gray-100">
            <div className="max-w-xl">
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase mb-6 leading-none">Global Quality, <br /><span className="text-green-600">Local Mastery.</span></h3>
              <p className="text-xl text-gray-500 font-medium leading-relaxed italic">"We bring international solar standards to the Nigerian terrain, ensuring high-yield performance in even the most demanding climates."</p>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-xl shadow-gray-200/50">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                </div>
              ))}
              <div className="w-16 h-16 rounded-full border-4 border-white bg-green-600 flex items-center justify-center text-white text-sm font-black shadow-xl shadow-green-200/50">
                1K+
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;