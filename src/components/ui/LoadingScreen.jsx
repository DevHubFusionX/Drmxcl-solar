import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center z-[200000]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => setTimeout(onComplete, 1800)}
    >
      <div className="relative flex flex-col items-center">
        {/* Minimalist Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="p-4 rounded-3xl bg-green-500/10 border border-green-500/20">
            <Sun className="h-12 w-12 text-green-500" />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl font-black text-white tracking-[0.3em] uppercase mb-1">
            SOLAR <span className="text-green-500">DREMCXL</span>
          </h1>
          <p className="text-[10px] font-black tracking-[0.5em] text-gray-500 uppercase">
            Engineering Excellence
          </p>
        </motion.div>

        {/* Minimal Progress Bar */}
        <div className="mt-12 w-48 h-[1px] bg-gray-800 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute inset-y-0 left-0 bg-green-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      </div>

      {/* Subtle Background Detail */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;