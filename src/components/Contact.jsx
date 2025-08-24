'use client';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'טלפון',
      value: '+972-50-123-4567',
      href: 'tel:+972501234567'
    },
    {
      icon: FaEnvelope,
      title: 'אימייל',
      value: 'shlomo@photography.co.il',
      href: 'mailto:shlomo@photography.co.il'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'כתובת',
      value: 'תל אביב, ישראל',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebook, href: '#', label: 'Facebook' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            צור קשר
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            מוכנים לצלם את הרגעים המיוחדים שלכם?
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">פרטי התקשרות</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 space-x-reverse"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{info.title}</h4>
                    <a 
                      href={info.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">עקבו אחריי ברשתות החברתיות</h4>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">שעות פעילות</h4>
              <div className="space-y-2 text-gray-300">
                <p>ראשון - חמישי: 09:00 - 19:00</p>
                <p>שישי: 09:00 - 14:00</p>
                <p>שבת: סגור</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">שלחו הודעה</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    שם פרטי
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="הכנס את שמך"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    שם משפחה
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="הכנס את שם משפחתך"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="הכנס את כתובת האימייל שלך"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="הכנס את מספר הטלפון שלך"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  סוג שירות
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                >
                  <option value="">בחר סוג שירות</option>
                  <option value="pregnancy">תמונות הריון</option>
                  <option value="fashion">תמונות אופנה</option>
                  <option value="custom">חבילה מותאמת אישית</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  הודעה
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="ספרו לנו על הפרויקט שלכם..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                שלח הודעה
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
