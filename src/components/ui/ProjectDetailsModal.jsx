import { motion } from 'framer-motion';
import { X, Zap, Shield, CheckCircle2, Cpu, Battery, Settings, Ruler } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    const technicalSpecs = [
        { label: 'Inverter', value: project.capacity.split(' ')[0] + ' Hybrid', icon: Cpu },
        { label: 'Storage', value: 'Lithium LiFePO4', icon: Battery },
        { label: 'Panels', value: 'Mono PERC Tier-1', icon: Settings },
        { label: 'Management', value: 'Smart Load Logic', icon: Settings },
    ];

    const requisites = [
        { title: 'Structural Audit', desc: 'Roof integrity check for panel load capacity and wind resistance.' },
        { title: 'Load Segregation', desc: 'Separation of essential and non-essential circuits for efficiency.' },
        { title: 'Cabling Path', desc: 'Optimized DC/AC cable routing to minimize power loss.' },
        { title: 'Solar Access', desc: 'Shading analysis to ensure maximum photovoltaic yield.' }
    ];

    return (
        <div className="fixed inset-0 z-[200000] flex items-center justify-center p-4 md:p-12 overflow-hidden">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-gray-950/95 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 40 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl h-full md:h-auto max-h-[90vh] bg-white rounded-[48px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 z-20 p-4 bg-gray-100 rounded-full text-gray-900 hover:bg-gray-200 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>

                {/* Left: Image & Hero Info */}
                <div className="md:w-5/12 relative bg-gray-950 flex flex-col">
                    <div className="absolute inset-0 opacity-40">
                        <ImagePlaceholder
                            src={project.image}
                            alt={project.imageAlt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />

                    <div className="relative mt-auto p-12 space-y-6">
                        <div className="inline-flex px-4 py-2 bg-green-500 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white">
                            {project.type} Case Study
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase">
                            {project.title}
                        </h2>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm font-bold">
                            <span className="flex items-center space-x-2">
                                <Settings className="h-4 w-4" />
                                <span>SPEC: {project.capacity}</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: Technical Details */}
                <div className="md:w-7/12 bg-white overflow-y-auto p-8 md:p-16 custom-scrollbar">
                    <div className="space-y-12">
                        {/* Engineering Overview */}
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-green-600 mb-6 flex items-center">
                                <span className="w-8 h-[1px] bg-green-600 mr-4" />
                                Technical Requisites
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {technicalSpecs.map((spec, i) => (
                                    <div key={i} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                                        <div className="p-3 bg-white rounded-2xl shadow-sm">
                                            <spec.icon className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{spec.label}</p>
                                            <p className="font-black text-gray-900">{spec.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Implementation Logic */}
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-900 mb-6 font-black">Pre-Installation Logic</h3>
                            <div className="space-y-4">
                                {requisites.map((req, i) => (
                                    <div key={i} className="group p-6 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-2">
                                                <h4 className="font-black text-gray-900 flex items-center space-x-3">
                                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                                    <span>{req.title}</span>
                                                </h4>
                                                <p className="text-sm text-gray-500 font-medium leading-relaxed">{req.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA in Modal */}
                        <div className="p-10 bg-gray-900 rounded-[40px] text-center space-y-6">
                            <h4 className="text-2xl font-black text-white tracking-tight">NEED A SIMILAR CONFIGURATION?</h4>
                            <p className="text-gray-400 text-sm font-medium">Our engineers can customize this specific requisite profile for your property.</p>
                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(`Hello Solar Dremcxl, I've just explored the requisites for the "${project.title}" case study and I'm interested in a similar configuration/audit for my property.`);
                                    window.open(`https://wa.me/2349138502947?text=${message}`, '_blank');
                                }}
                                className="px-8 py-4 bg-green-600 text-white font-black rounded-full hover:bg-green-500 transition-all text-sm uppercase tracking-widest active:scale-95 shadow-xl shadow-green-500/20"
                            >
                                INITIATE AUDIT
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetailsModal;
