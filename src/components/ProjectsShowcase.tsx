import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    title: 'Modern Living Space',
    location: 'Dubai, UAE',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    title: 'Minimalist Villa',
    location: 'Tokyo, Japan',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    title: 'Luxury Penthouse',
    location: 'New York, USA',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    title: 'Contemporary Home',
    location: 'London, UK',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
    title: 'Coastal Retreat',
    location: 'Sydney, Australia',
  },
];

const ProjectsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + projects.length) % projects.length;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-20 md:py-32 bg-[#080808] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-wider uppercase"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              to="/about"
              className="text-white/50 hover:text-white text-sm font-body tracking-wider underline underline-offset-4 transition-colors duration-300"
            >
              View all projects
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative px-4 md:px-8">
        {/* Desktop & Tablet - 3 Image Carousel */}
        <div className="hidden sm:flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
          {/* Left Side Image - Smaller with depth */}
          <motion.div
            key={`left-${getSlideIndex(-1)}`}
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative w-40 md:w-56 lg:w-72 aspect-[3/4] flex-shrink-0 cursor-pointer group"
            onClick={prevSlide}
          >
            <div className="w-full h-full overflow-hidden rounded-sm">
              <img
                src={projects[getSlideIndex(-1)].image}
                alt={projects[getSlideIndex(-1)].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            {/* Hidden info on hover */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white/80 text-xs font-body uppercase tracking-wider">
                {projects[getSlideIndex(-1)].location}
              </p>
            </div>
          </motion.div>

          {/* Center Image - Large and Highlighted */}
          <div className="relative w-[50vw] md:w-[45vw] lg:w-[40vw] max-w-3xl aspect-[4/3] flex-shrink-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 overflow-hidden rounded-sm shadow-2xl"
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8"
                >
                  <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-display tracking-wide mb-2">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-white/70 text-sm font-body uppercase tracking-[0.15em]">
                    {projects[currentIndex].location}
                  </p>
                </motion.div>

                {/* Navigation Arrows on Center Image */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all duration-300"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all duration-300"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.button>
                </div>

                {/* Slide Counter */}
                <div className="absolute top-6 right-6 text-white/60 text-sm font-body tracking-wider">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Image - Smaller with depth */}
          <motion.div
            key={`right-${getSlideIndex(1)}`}
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative w-40 md:w-56 lg:w-72 aspect-[3/4] flex-shrink-0 cursor-pointer group"
            onClick={nextSlide}
          >
            <div className="w-full h-full overflow-hidden rounded-sm">
              <img
                src={projects[getSlideIndex(1)].image}
                alt={projects[getSlideIndex(1)].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            {/* Hidden info on hover */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white/80 text-xs font-body uppercase tracking-wider">
                {projects[getSlideIndex(1)].location}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile - Single Image Carousel */}
        <div className="sm:hidden relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-xl mx-auto"
            >
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              
              {/* Project Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg font-display tracking-wide mb-1">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-white/70 text-xs font-body uppercase tracking-wider">
                  {projects[currentIndex].location}
                </p>
              </div>

              {/* Mobile Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-9 h-9 flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/20 rounded-full text-white"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-9 h-9 flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/20 rounded-full text-white"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Mobile Slide Counter */}
              <div className="absolute top-3 right-3 text-white/60 text-xs font-body">
                {currentIndex + 1} / {projects.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
