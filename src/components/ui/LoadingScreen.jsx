import { motion } from 'framer-motion';
import { Zap, Battery, Sun } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const loadingTexts = [
    "Harnessing Solar Energy...",
    "Optimizing Power Systems...",
    "Calibrating Inverters...",
    "Initializing Clean Energy Solutions..."
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => setTimeout(onComplete, 2000)}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Solar Panel Grid Animation */}
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="grid grid-cols-3 gap-2 w-24 h-16 mx-auto mb-4">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Energy Flow Animation */}
          <motion.div className="flex items-center justify-center space-x-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sun className="h-8 w-8 text-yellow-400" />
            </motion.div>

            <motion.div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-0.5 bg-green-400 rounded-full"
                  animate={{
                    x: [0, 20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="h-8 w-8 text-green-400" />
            </motion.div>

            <motion.div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-0.5 bg-blue-400 rounded-full"
                  animate={{
                    x: [0, 20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2 + 0.5
                  }}
                />
              ))}
            </motion.div>

            <motion.div className="relative">
              <Battery className="h-8 w-8 text-blue-400" />
              <motion.div
                className="absolute inset-0 bg-green-400 rounded-sm opacity-30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Company Branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent mb-2">
            Solar Dremcxl
          </h1>

          <motion.p
            className="text-slate-300 text-lg font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Harnessing Solar Energy...
          </motion.p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="mt-8 w-64 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <motion.p
            className="text-slate-400 text-sm mt-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Preparing your sustainable energy experience
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;