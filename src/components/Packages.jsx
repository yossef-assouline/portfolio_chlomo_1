'use client';
import { motion } from 'framer-motion';

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
            חבילות צילום
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
חבילת צילומי חוץ            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            צילומי הריון, משפחה, ילדים או תדמית.
            </p>
          </div>

          <div className="border-t border-gray-200 mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="text-4xl md:text-5xl font-serif font-bold text-[#dcad5c]">
            ₪500
            </div>
            
          </div>

          <ul className="space-y-4 mb-8 max-w-md mx-auto ">
            <li className="flex items-center justify-center space-x-3 space-x-reverse gap-2">
              <div className="w-2 h-2 bg-[#dcad5c] rounded-full flex-shrink-0"></div>
              <span className="text-gray-700 font-bold">עד שעה של צילום</span>
            </li>
            <li className="flex items-center justify-center space-x-3 space-x-reverse gap-2">
              <div className="w-2 h-2 bg-[#dcad5c] rounded-full flex-shrink-0"></div>
              <span className="text-gray-700 font-bold">צילומים ללא הגבלה במהלך הסשן</span>
            </li>
            <li className="flex items-center justify-center space-x-3 space-x-reverse gap-2">
              <div className="w-2 h-2 bg-[#dcad5c] rounded-full flex-shrink-0"></div>
              <span className="text-gray-700 font-bold">בין 50-100 תמונות ערוכות ומוכנות לשימוש</span>
            </li>
          </ul>

          <div className="text-center">
            <motion.button
              className="bg-[#dcad5c] hover:bg-[#eac27b] text-white hover:cursor-pointer px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const message = encodeURIComponent('שלום! אני מעוניין/ת במידע על חבילות הצילום שלך');
                window.open(`https://wa.me/972536670760?text=${message}`,'_blank');
              }}
            >
              הזמן עכשיו
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
