import { LanguageProvider } from '../lib/LanguageContext.jsx';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import EducationTimeline from '../components/portfolio/EducationTimeline';
import CareerSection from '../components/portfolio/CareerSection';
import AchievementsSection from '../components/portfolio/AchievementsSection';
import MusicSection from '../components/portfolio/MusicSection';
import GallerySection from '../components/portfolio/GallerySection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

const IMAGES = {
  heroSports: '/images/hero.jpg',
  heroMusic: '/images/hero-main.jpg',
  portrait: '/images/portrait.jpg',
  musicPiano: '/images/gallery-4.jpg',
  contactBg: '/images/hero.jpg',
  img1: '/images/gallery-1.jpg',
  img2: '/images/gallery-2.jpg',
  img3: '/images/gallery-3.jpg',
  img4: '/images/gallery-4.jpg',
  img5: '/images/gallery-5.jpg',
  img6: '/images/gallery-6.jpg',
  img7: '/images/gallery-7.jpg',
  img8: '/images/gallery-8.jpg',
  img9: '/images/gallery-9.jpg',
  img10: '/images/ingame-1.jpg',
};

const galleryImages = [
  { src: IMAGES.img1, alt: 'Goalkeeper', label: 'Football' },
  { src: IMAGES.img3, alt: 'Match action', label: 'Goalkeeper' },
  { src: IMAGES.img7, alt: 'Trophy', label: 'Best Goalkeeper Award' },
  { src: IMAGES.img4, alt: 'Training', label: 'Training' },
  { src: IMAGES.img9, alt: 'Night match', label: 'Torpedo' },
  { src: IMAGES.img2, alt: 'Life', label: 'Life' },
  { src: IMAGES.img5, alt: 'Fun', label: 'School' },
  { src: IMAGES.img6, alt: 'Fun 2', label: 'School' },
  { src: IMAGES.img8, alt: 'Selfie', label: 'Selfie' },
  { src: IMAGES.img10, alt: 'Funny', label: 'Vibes' },
  { src: '/images/ingame-2.jpg', alt: 'On the rocks', label: 'Adventure' },
  { src: '/images/ingame-3.jpg', alt: 'Kuper jacket', label: 'Style' },
  { src: '/images/ingame-4.jpg', alt: 'With Bivol', label: 'Bivol x Olimpbet' },
  { src: '/images/ingame-5.jpg', alt: 'Dynamo shirt', label: 'Dynamo' },
  { src: '/images/ingame-6.jpg', alt: 'With goalkeeper', label: 'Pro Keeper' },
];

export default function Home() {
  return (
    <LanguageProvider>
      <div className="bg-[#08090A] min-h-screen">
        <Navbar />
        <HeroSection sportsImg={IMAGES.heroSports} musicImg={IMAGES.heroMusic} />
        <AboutSection portraitImg={IMAGES.portrait} />
        <EducationTimeline />
        <CareerSection />
        <AchievementsSection />
        <MusicSection musicImg={IMAGES.musicPiano} />
        <GallerySection images={galleryImages} />
        <ContactSection bgImg={IMAGES.contactBg} />
        <Footer />
      </div>
    </LanguageProvider>
  );
}