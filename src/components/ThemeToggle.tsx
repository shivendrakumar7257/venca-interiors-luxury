import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className="fixed top-20 right-6 z-50 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-champagne/10 transition-all duration-300 group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 text-champagne/70 group-hover:text-champagne transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-champagne/70 group-hover:text-champagne transition-colors" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
