import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import FloatingThemeToggle from './FloatingThemeToggle';

interface HeaderProps {
  isVisible: boolean;
}

const navItems = [
  { label: 'OUR STORY', path: '/our-story' },
  { label: 'OUR COLLECTIONS', path: '/collections' },
  { label: 'OUR PROJECTS', path: '/projects' },
  { label: 'OUR SERVICES', path: '/services' },
  { label: 'OUR CONTACT', path: '/contact' },
];

const mobileNavItems = [
  { label: 'Collections', path: '/collections' },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Our Services', path: '/services' },
  { label: 'About Us', path: '/our-story' },
  { label: 'Contact', path: '/contact' },
];

const Header = ({ isVisible }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -60, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ 
          backgroundColor: 'rgba(60, 60, 60, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Mobile Header */}
        <div className="md:hidden h-14 px-4 flex items-center justify-between">
          {/* Left - Hamburger */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white/80 hover:text-white transition-colors p-2"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Center - Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="font-brand text-sm tracking-[0.2em] text-white font-normal uppercase">
              Vanca Interio
            </h1>
          </Link>

          {/* Right - Icons */}
          <div className="flex items-center gap-3">
            <button className="text-white/70 hover:text-white transition-colors p-2">
              <Search className="w-4 h-4" />
            </button>
            <button className="text-white/70 hover:text-white transition-colors p-2">
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex container mx-auto h-11 px-6 items-center justify-center">
          {/* Center - Brand Name */}
          <Link to="/">
            <h1 className="font-brand text-base md:text-lg tracking-[0.25em] text-white font-normal uppercase">
              Vanca Interio
            </h1>
          </Link>

          {/* Right - Actions */}
          <div className="absolute right-6 flex items-center gap-5">
            <button className="text-white/70 hover:text-white transition-colors duration-300">
              <User className="w-4 h-4" />
            </button>
            <button className="text-white/70 hover:text-white transition-colors duration-300">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Navigation Bar */}
        <nav className="hidden md:block border-t border-white/5">
          <div className="container mx-auto px-6">
            <ul className="flex items-center justify-center gap-6 md:gap-10 h-9">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-white text-[10px] md:text-xs tracking-[0.12em] font-body whitespace-nowrap transition-colors duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-[#1a1a1a] z-[70] md:hidden overflow-hidden"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="font-brand text-sm tracking-[0.2em] text-white uppercase">
                  Menu
                </h2>
                <button 
                  onClick={closeMobileMenu}
                  className="text-white/60 hover:text-white transition-colors p-1"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="p-6">
                <ul className="space-y-6">
                  {mobileNavItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMobileMenu}
                        className="text-white/80 hover:text-champagne text-lg tracking-wide font-body transition-colors duration-300 block"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Theme Toggle at bottom */}
              <div className="absolute bottom-8 left-6 right-6 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm font-body">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Theme Toggle - Desktop Only */}
      <FloatingThemeToggle isVisible={isVisible} />
    </>
  );
};

export default Header;
