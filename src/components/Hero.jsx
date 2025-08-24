'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[40vh] flex items-center justify-center bg-white">
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-medium  text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            שלמה אסולין
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            צלם  זוגות - הריון - משפחות - ‏אופנה -תדמית
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
