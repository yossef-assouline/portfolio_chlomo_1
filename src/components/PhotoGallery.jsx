'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const categoryImages = {
  couples: '/couple-thumnbail.jpg',
  pregnancy: '/pregnant-thumnbail.jpg',
  fashion: '/fashion-thumbnai.jpg',
};

const categoryAlts = {
  couples: 'couple-image',
  pregnancy: 'pregnancy-image',
  fashion: 'fashion-image',
};

const categoryPositions = {
  couples: 'center 30%',
  pregnancy: 'center 80%',
  fashion: 'center 35%',
};

const PhotoGallery = ({ title, photos, id }) => {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to the respective page based on the section id
    switch (id) {
      case 'couples':
        router.push('/couples');
        break;
      case 'pregnancy':
        router.push('/pregnancy');
        break;
      case 'fashion':
        router.push('/fashion');
        break;
      default:
        router.push('/');
    }
  };

  // Select the image, alt text, and position based on the category id
  const imageSrc = categoryImages[id] || '/default-thumbnail.jpg';
  const imageAlt = categoryAlts[id] || 'gallery-image';
  const imagePosition = categoryPositions[id] || 'center 50%';

  return (
    <section id={id} className="py-0 bg-white">
      <div className="w-full flex justify-center p-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative h-120  md:w-2/3 w-full overflow-hidden  cursor-pointer shadow-2xl transition-all duration-300 group"
            onClick={handleClick}
          >
            {/* Background Image for each category */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              style={{ 
                objectFit: 'cover',
                objectPosition: imagePosition
              }}
              sizes="(max-width: 768px) 100vw, 66vw"
              
              className="group-hover:scale-110 transition-transform duration-300"
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

            {/* Text Overlay - positioned on the left side */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-16 lg:px-24">
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl lg:text-7xl text-center font-playfair font-light text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  {title}
                </motion.h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
