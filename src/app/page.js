import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';
import Packages from '../components/Packages.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';

export default function Home() {
  // Single photo section for couple photos
  const couplePhotos = [{
    id: 1,
    title: 'תמונות זוגות',
    description: 'תמונות זוגיות מקצועיות'
  }];

  // Single photo section for pregnancy photos
  const pregnancyPhotos = [{
    id: 1,
    title: 'תמונות הריון',
    description: 'תמונות הריון מקצועיות'
  }];

  // Single photo section for fashion photos
  const fashionPhotos = [{
    id: 1,
    title: 'תמונות אופנה',
    description: 'תמונות אופנה מקצועיות'
  }];

  return (
    <main className="min-h-screen">
      <Hero />
      
      <PhotoGallery 
        title="צילומי זוגיות" 
        photos={couplePhotos} 
        id="couples" 
      />
      
      <PhotoGallery 
        title="תמונות הריון" 
        photos={pregnancyPhotos} 
        id="pregnancy" 
      />
      
      <PhotoGallery 
        title="תמונות אופנה" 
        photos={fashionPhotos} 
        id="fashion" 
      />
      
      <Packages />
      <Footer />
      <WhatsAppButton phoneNumber="+972501234567" />
    </main>
  );
}
