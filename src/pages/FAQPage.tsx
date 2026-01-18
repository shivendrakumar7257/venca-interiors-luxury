import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: 'What is the delivery timeline for furniture orders?',
    answer: 'Standard delivery takes 4-6 weeks for in-stock items. Custom and bespoke pieces may require 8-12 weeks. We provide detailed tracking and updates throughout the process.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to over 40 countries worldwide. International shipping rates and timelines vary by destination. Please contact our team for specific details about your location.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for standard items in their original condition. Custom and bespoke pieces are final sale. A restocking fee may apply for returned items.'
  },
  {
    question: 'Can I customize furniture pieces?',
    answer: 'Absolutely. Many of our pieces can be customized in terms of fabric, finish, and dimensions. Our design consultants can guide you through the customization process.'
  },
  {
    question: 'Do you offer interior design services?',
    answer: 'Yes, our team of experienced interior designers offers consultations both in-person and virtually. We can help you create cohesive spaces that reflect your personal style.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and offer financing options for qualifying purchases. For large orders, we also offer custom payment plans.'
  }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Header isVisible={true} />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-cream/50 hover:text-champagne transition-colors duration-300 mb-8 font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider">Back to Home</span>
            </Link>

            <span className="block text-champagne/60 text-sm tracking-[0.4em] uppercase mb-4 font-body">
              Support
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream tracking-wide">
              Frequently Asked Questions
            </h1>
            <p className="text-cream/50 mt-6 text-lg font-body max-w-2xl">
              Find answers to common questions about our products, services, and policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-charcoal-light"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display text-xl text-cream pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-charcoal-light text-champagne">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-cream/60 font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center p-12 border border-charcoal-light"
          >
            <h3 className="font-display text-2xl text-cream mb-4">
              Still have questions?
            </h3>
            <p className="text-cream/50 font-body mb-6">
              Our team is here to help you with any inquiries.
            </p>
            <a 
              href="mailto:contact@vencainterio.com"
              className="inline-block px-8 py-3 border border-champagne text-champagne hover:bg-champagne/10 transition-colors duration-300 text-sm tracking-[0.2em] uppercase font-body"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
