'use client';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { IoCameraOutline } from "react-icons/io5";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === '/';
  const message = encodeURIComponent('שלום! אני מעוניין/ת במידע על חבילות הצילום שלך');
  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/chlomo_assouline/', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1BHK4aePXq/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: FaWhatsapp, href: `https://wa.me/972536670760?text=${message}`, label: 'WhatsApp' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="relative z-50 bg-white"
    >
      {/* Upper white section with logo and name */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile burger menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-[#dcad5c] transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Logo and Name - Centered on mobile */}
          <motion.div 
            className="flex items-center cursor-pointer absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.location.href = '/'}
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Image src="/logoo.png" alt="לוגו של שלמה אסולין" width={64} height={64} className="" />
            </div>
            <span className="text-gray-800 font-serif font-bold text-2xl">שלמה אסולין</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {!isMainPage && (
              <a
                href="/"
                className="text-gray-700 hover:text-[#dcad5c] font-medium transition-colors duration-200"
              >
                ראשי
              </a>
            )}
            <a
              href="/couples"
              className="text-gray-700 hover:text-[#dcad5c] font-medium transition-colors duration-200"
            >
              צילומי זוגות
            </a>
            <a
              href="/pregnancy"
              className="text-gray-700 hover:text-[#dcad5c] font-medium transition-colors duration-200"
            >
              צילומי הריון
            </a>
            <a
              href="/fashion"
              className="text-gray-700 hover:text-[#dcad5c] font-medium transition-colors duration-200"
            >
              צילומי אופנה
            </a>
            {isMainPage && (
              <a
                href="#packages"
                className="text-gray-700 hover:text-[#dcad5c] font-medium transition-colors duration-200"
                onClick={e => {
                  e.preventDefault();
                  const section = document.querySelector('#packages');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                מחירון
              </a>
            )}
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <nav className="py-4 space-y-4">
              {!isMainPage && (
                <a
                  href="/"
                  className="block text-gray-700 hover:text-[#dcad5c] font-medium transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ראשי
                </a>
              )}
              <a
                href="/couples"
                className="block text-gray-700 hover:text-[#dcad5c] font-medium transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                צילומי זוגות
              </a>
              <a
                href="/pregnancy"
                className="block text-gray-700 hover:text-[#dcad5c] font-medium transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                צילומי הריון
              </a>
              <a
                href="/fashion"
                className="block text-gray-700 hover:text-[#dcad5c] font-medium transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                צילומי אופנה
              </a>
              {isMainPage && (
                <a
                  href="#packages"
                  className="block text-gray-700 hover:text-[#dcad5c] font-medium transition-colors duration-200 text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const section = document.querySelector('#packages');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  מחירון
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </div>

      {/* Lower black bar with social icons */}
      <div className="bg-black py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-6 ">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-black hover:text-slate-800 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
