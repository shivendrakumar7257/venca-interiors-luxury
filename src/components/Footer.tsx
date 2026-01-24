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
    <footer className="bg-charcoal-deep border-t border-charcoal-light">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-brand text-2xl text-cream tracking-[0.1em] font-medium mb-4">
              Vanca Interio
            </h3>
            <p className="text-cream/40 text-sm leading-relaxed font-body max-w-xs">
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
            <h4 className="text-champagne text-sm tracking-[0.3em] uppercase mb-6 font-body">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-cream/50 hover:text-champagne text-sm transition-colors duration-300 font-body"
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
            <h4 className="text-champagne text-sm tracking-[0.3em] uppercase mb-6 font-body">
              Connect
            </h4>
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border border-charcoal-light hover:border-champagne text-cream/50 hover:text-champagne transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-charcoal-light flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-cream/30 text-xs tracking-wider font-body">
            © 2024 Vanca Interio. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs tracking-wider font-body">
            Designed with passion for exceptional living
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
