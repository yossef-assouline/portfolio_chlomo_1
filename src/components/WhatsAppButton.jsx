'use client';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('שלום! אני מעוניין/ת במידע על חבילות הצילום שלך');
    const whatsappUrl = `https://wa.me/972536670760?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 gap-2 z-50 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center hover:cursor-pointer
        md:px-4 md:py-3 md:rounded-lg md:space-x-2 md:space-x-reverse
        p-3 rounded-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <FaWhatsapp className="w-5 h-5" />
      <span className="font-medium hidden md:inline">הזמן צילום</span>
    </motion.button>
  );
};

export default WhatsAppButton;
