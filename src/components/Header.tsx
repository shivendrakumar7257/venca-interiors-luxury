import { motion } from 'framer-motion';
import { Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isVisible: boolean;
}

const Header = ({ isVisible }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass h-16"
    >
      <div className="container mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-champagne font-display text-xl tracking-wider">VI</span>
        </Link>

        {/* Center - Brand Name */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="font-display text-xl md:text-2xl tracking-[0.3em] text-cream font-light">
            Venca Interio
          </h1>
        </Link>

        {/* Right - Actions */}
        <div className="flex items-center gap-6">
          <button className="text-cream/70 hover:text-champagne transition-colors duration-300">
            <Search className="w-5 h-5" />
          </button>
          <Link 
            to="/login" 
            className="flex items-center gap-2 text-cream/70 hover:text-champagne transition-colors duration-300"
          >
            <User className="w-5 h-5" />
            <span className="hidden md:inline text-sm tracking-wide">Login</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
