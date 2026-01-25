import { motion } from 'framer-motion';
import { Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isVisible: boolean;
}

const navItems = [
  { label: 'OUR STORY', path: '/about' },
  { label: 'OUR COLLECTIONS', path: '/category/sofas' },
  { label: 'OUR PROJECTS', path: '/category/chairs' },
  { label: 'OUR SERVICES', path: '/faq' },
  { label: 'OUR CONTACT', path: '/about' },
];

const Header = ({ isVisible }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      {/* Top Bar - Brand & Actions */}
      <div className="container mx-auto h-14 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-champagne font-display text-xl tracking-wider">VI</span>
        </Link>

        {/* Center - Brand Name */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="font-display text-xl md:text-2xl tracking-[0.3em] text-white font-medium">
            Vanca Interio
          </h1>
        </Link>

        {/* Right - Actions */}
        <div className="flex items-center gap-6">
          <button className="text-white/70 hover:text-champagne transition-colors duration-300">
            <Search className="w-5 h-5" />
          </button>
          <Link 
            to="/login" 
            className="flex items-center gap-2 text-white/70 hover:text-champagne transition-colors duration-300"
          >
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="border-t border-white/10">
        <div className="container mx-auto px-6">
          <ul className="flex items-center justify-center gap-8 md:gap-12 h-12 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-white/80 hover:text-white text-xs md:text-sm tracking-[0.15em] font-body whitespace-nowrap transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
