import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroVideo1 from '@/assets/videos/hero-video-1.mp4';
import heroVideo2 from '@/assets/videos/hero-video-2.mp4';
import heroVideo3 from '@/assets/videos/hero-video-3.mp4';
import heroVideo4 from '@/assets/videos/hero-video-4.mp4';

const videos = [
  { src: heroVideo1, title: 'Living Spaces' },
  { src: heroVideo2, title: 'Bedroom Elegance' },
  { src: heroVideo3, title: 'Dining Excellence' },
  { src: heroVideo4, title: 'Lounge Luxury' },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-100%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Videos with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0"
      >
        {/* Light mode: no overlay, Dark mode: gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-10 dark:block hidden" />
        
        <AnimatePresence mode="wait">
          <motion.video
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            src={videos[currentIndex].src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
        
        {/* Overlay for depth - only in dark mode */}
        <div className="absolute inset-0 bg-background/40 z-[5] dark:block hidden" />
      </motion.div>

      {/* Navigation Arrows - Minimal style without boxes */}
      <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 pointer-events-none">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          onClick={prevSlide}
          className="pointer-events-auto p-2 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-white/60 group-hover:text-champagne transition-colors duration-300" />
        </motion.button>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          onClick={nextSlide}
          className="pointer-events-auto p-2 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-white/60 group-hover:text-champagne transition-colors duration-300" />
        </motion.button>
      </div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center"
      >
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-champagne/80 tracking-[0.4em] text-sm md:text-base mb-6 font-body uppercase"
          >
            Luxury Interior Design
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-brand text-3xl md:text-5xl lg:text-6xl text-white tracking-[0.25em] font-normal uppercase"
          >
            Vanca Interio
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-champagne to-transparent mx-auto mt-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/70 mt-8 text-sm md:text-base tracking-wider max-w-md mx-auto font-body"
          >
            Curating exceptional spaces with timeless elegance
          </motion.p>

          {/* Current Slide Title */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-champagne/50 mt-6 text-xs tracking-[0.3em] uppercase font-body"
            >
              {videos[currentIndex].title}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Slide Indicators - Circular Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-3"
        >
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'w-2.5 h-2.5 bg-champagne scale-110' 
                  : 'w-2 h-2 bg-champagne/30 hover:bg-champagne/50'
              }`}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-champagne/50 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
