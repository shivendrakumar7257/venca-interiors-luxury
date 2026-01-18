import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showHeader, setShowHeader] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setShowHeader(latest > 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className="min-h-screen bg-background">
      <Header isVisible={showHeader} />
      <HeroSection />
      <CategorySection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
