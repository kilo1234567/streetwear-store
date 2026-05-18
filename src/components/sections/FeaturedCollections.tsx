import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const collections = [
  {
    title: 'Breakfast Favorites',
    subtitle: '7 AM – 11 AM',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
  },
  {
    title: 'Lunch & Brunch',
    subtitle: 'Daily Specials',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
  },
  {
    title: 'Dinner Signature',
    subtitle: 'Chef Recommends',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
  },
];

export const FeaturedCollections: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-display">Our Dining Highlights</h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">Discover seasonal menus designed for every part of your day.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <motion.div key={collection.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
            <img src={collection.image} alt={collection.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-widest font-bold opacity-80 mb-2">{collection.subtitle}</p>
                <h3 className="text-3xl font-bold font-display">{collection.title}</h3>
              </div>
              <Button size="md" className="bg-white text-neutral-900 hover:bg-neutral-100">See Dishes →</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
