'use client';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative md:min-h-[30vh] min-h-[20vh] flex items-center justify-center bg-white"
    >
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-medium text-gray-900 mb-4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          שלמה אסולין
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light tracking-wide"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          צלם זוגות - הריון - משפחה - תדמית - אופנה
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
