import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const collections = [
  {
    title: 'Summer Collection',
    subtitle: 'Light & Fresh',
    image: 'https://images.unsplash.com/photo-1555689352541-c94df1b57dba?w=600&h=400&fit=crop',
    color: 'from-blue-400/20 to-cyan-400/20',
  },
  {
    title: 'Urban Essentials',
    subtitle: 'Daily Wear',
    image: 'https://images.unsplash.com/photo-1516993957512-86f4ee872558?w=600&h=400&fit=crop',
    color: 'from-slate-400/20 to-gray-400/20',
  },
  {
    title: 'Premium Leather',
    subtitle: 'Luxury Line',
    image: 'https://images.unsplash.com/photo-1520814627188-95c5e64f6a4a?w=600&h=400&fit=crop',
    color: 'from-amber-400/20 to-orange-400/20',
  },
];

export const FeaturedCollections: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-display">
          Featured Collections
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
          Curated collections for every style and occasion
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-widest font-bold opacity-80 mb-2">
                  {collection.subtitle}
                </p>
                <h3 className="text-3xl font-bold font-display">{collection.title}</h3>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button size="md" className="bg-white text-neutral-900 hover:bg-neutral-100">
                  Explore →
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
