import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const footerLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0E0E0E 0%, #070707 100%)',
        }}
      />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-brand text-2xl text-[#F5F5F0] tracking-[0.12em] font-medium mb-5">
              Vanca Interio
            </h3>
            <p className="text-[#B8B8B8] text-sm leading-relaxed font-body max-w-xs">
              Crafting extraordinary interiors with an unwavering commitment 
              to excellence, elegance, and timeless design.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:text-center"
          >
            <h4 className="text-[#C9A76A] text-xs tracking-[0.2em] uppercase mb-6 font-body">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-[#B8B8B8] hover:text-[#C9A76A] text-sm transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-right"
          >
            <h4 className="text-[#C9A76A] text-xs tracking-[0.2em] uppercase mb-6 font-body">
              Connect
            </h4>
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border border-[#C9A76A]/40 text-[#B8B8B8] hover:border-[#C9A76A] hover:bg-[#C9A76A] hover:text-[#0E0E0E] hover:scale-105 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright - Absolute Bottom Center */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-[#666666] text-xs tracking-wider font-body">
            © 2024 Vanca Interio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
