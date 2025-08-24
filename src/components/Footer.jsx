'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-600 text-sm">
            © {currentYear} שלמה אסולין - צילום מקצועי. כל הזכויות שמורות.
          </p>         
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
