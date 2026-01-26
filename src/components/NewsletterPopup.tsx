import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const POPUP_DELAY = 800; // 800ms delay

// Declare global guard on window object
declare global {
  interface Window {
    __newsletterShownOnce?: boolean;
  }
}

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const hasTriggered = useRef(false);

  useEffect(() => {
    // Guard: Only show popup once per page load using window-level flag AND ref
    if (window.__newsletterShownOnce || hasTriggered.current) {
      return;
    }
    
    // Mark as triggered immediately to prevent duplicate calls
    hasTriggered.current = true;
    window.__newsletterShownOnce = true;
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative z-10 flex w-full max-w-4xl overflow-hidden shadow-luxury"
          >
            {/* Left - Image */}
            <div className="hidden md:block w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            </div>

            {/* Right - Form */}
            <div className="w-full md:w-1/2 bg-[#2a2a2a] p-8 md:p-12 flex flex-col justify-center relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
                aria-label="Close popup"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <span className="text-champagne text-xs tracking-[0.3em] uppercase font-body">
                  Welcome to the world of Vanca
                </span>

                <h2 className="font-display text-3xl md:text-4xl text-white tracking-wide">
                  Hello there!
                </h2>

                <p className="text-white/60 text-sm leading-relaxed font-body">
                  Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@newsletter.com"
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-champagne focus:outline-none transition-colors duration-300 font-body text-sm"
                  />

                  <button
                    type="submit"
                    className="w-full bg-champagne text-black py-3 text-sm tracking-[0.2em] uppercase font-body hover:bg-champagne-light transition-colors duration-300"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
