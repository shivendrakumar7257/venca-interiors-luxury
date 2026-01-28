import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CollectionCardProps {
  id: string;
  name: string;
  image: string;
  tagline: string;
  index: number;
  size?: 'large' | 'medium';
}

const CollectionCard = ({ id, name, image, tagline, index, size = 'medium' }: CollectionCardProps) => {
  const aspectRatio = size === 'large' ? 'aspect-[4/5]' : 'aspect-[3/4]';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <Link to={`/category/${id}`} className="block relative overflow-hidden rounded-lg shadow-card hover-lift">
        <div className={`${aspectRatio} relative overflow-hidden bg-card`}>
          {/* Image with zoom effect */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img 
              src={image} 
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {/* Category name */}
              <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-2 group-hover:text-champagne transition-colors duration-300">
                {name}
              </h3>
              
              {/* Underline */}
              <motion.div 
                className="w-12 h-[1px] bg-champagne mb-3 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              />
              
              {/* Tagline */}
              <p className="text-muted-foreground text-sm tracking-wide font-body opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {tagline}
              </p>
            </motion.div>
          </div>

          {/* Border animation on hover */}
          <div className="absolute inset-0 border border-champagne/0 group-hover:border-champagne/30 rounded-lg transition-all duration-500" />
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionCard;
