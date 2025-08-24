'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function CouplesPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    '/couple-1.jpeg',
    '/couple-2.jpeg',
    '/couple-3.jpeg',
    '/couple-thumnbail.jpg',
    '/couple-thumnbail.jpg',
    '/couple-thumnbail.jpg',
    '/couple-thumnbail.jpg',
    '/couple-thumnbail.jpg',
    '/couple-thumnbail.jpg',
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
     

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-md text-gray-900  mb-8">
              צילומי זוגות רומנטיים
            </h2>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
                צילומי זוגות הם דרך מיוחדת לתעד את האהבה והקשר המיוחד שלכם. 
                אני מתמחה בצילום זוגות רומנטי ואינטימי שמתמקד ברגעים האמיתיים והטבעיים.
              </p>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-md text-gray-900 mb-4">
              גלריית תמונות
            </h2>
            <p className="text-lg text-gray-600">
              דוגמאות לצילומי זוגות רומנטיים ואינטימיים
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image}
                  alt={`צילום זוגות ${index + 1}`}
                  width={400}
                  height={300}
                  priority
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                חבילת צילומי זוגות
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
                צילום זוגות רומנטי ואינטימי בחוץ עם אווירה טבעית ואותנטית.
              </p>
            </div>

            <div className="border-t border-gray-200 mb-8"></div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="text-4xl md:text-5xl font-serif font-bold text-[#dcad5c]">
                ₪600
              </div>
              <div className="text-gray-600 text-lg">
                צילום מלא + 60 תמונות מעובדות
              </div>
            </div>

            <ul className="space-y-4 mb-8 max-w-md mx-auto">
              <li className="flex items-center justify-center space-x-3 space-x-reverse gap-2">
                <div className="w-2 h-2 bg-[#dcad5c] rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-bold">עד שעה וחצי של צילום</span>
              </li>
              <li className="flex items-center justify-center space-x-3 space-x-reverse gap-2">
                <div className="w-2 h-2 bg-[#dcad5c] rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-bold">צילומים ללא הגבלה במהלך הסשן</span>
              </li>
              <li className="flex items-center justify-center space-x-3 space-x-reverse gap-2">
                <div className="w-2 h-2 bg-[#dcad5c] rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-bold">בין 60-100 תמונות ערוכות ומוכנות לשימוש</span>
              </li>
              <li className="flex items-center justify-center space-x-3 space-x-reverse gap-2">
                <div className="w-2 h-2 bg-[#dcad5c] rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-bold">עריכה מקצועית לכל תמונה</span>
              </li>
            </ul>

            <div className="text-center">
              <motion.button
                className="bg-[#dcad5c] hover:bg-[#eac27b] text-white hover:cursor-pointer px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const message = encodeURIComponent('שלום! אני מעוניין/ת בחבילת צילומי זוגות - ₪600');
                  window.open(`https://wa.me/972536670760?text=${message}`, '_blank');
                }}
              >
                הזמן עכשיו
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage}
                alt="תמונה מורחבת"
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
