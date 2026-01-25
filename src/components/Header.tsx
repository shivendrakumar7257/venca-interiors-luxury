import { motion } from 'framer-motion';
import { Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

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
      initial={{ y: -60, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -60, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        backgroundColor: 'rgba(60, 60, 60, 0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Single slim bar */}
      <div className="container mx-auto h-11 px-6 flex items-center justify-between">
        {/* Left - Theme Toggle */}
        <div className="flex items-center gap-4 w-24">
          <ThemeToggle />
        </div>

        {/* Center - Brand Name */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="font-brand text-base md:text-lg tracking-[0.25em] text-white font-normal uppercase">
            Vanca Interio
          </h1>
        </Link>

        {/* Right - Actions */}
        <div className="flex items-center gap-5 w-24 justify-end">
          <button className="text-white/70 hover:text-white transition-colors duration-300">
            <User className="w-4 h-4" />
          </button>
          <button className="text-white/70 hover:text-white transition-colors duration-300">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navigation Bar - Slim */}
      <nav className="border-t border-white/5">
        <div className="container mx-auto px-6">
          <ul className="flex items-center justify-center gap-6 md:gap-10 h-9 overflow-x-auto">
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
  );
};

export default Header;
