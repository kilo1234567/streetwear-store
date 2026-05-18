import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/Card';

const trendingProducts = [
  { id: '1', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop', name: 'Truffle Mushroom Pasta', price: 24.0, category: 'Dinner', rating: 4.9, reviews: 128, isTrending: true },
  { id: '2', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&h=500&fit=crop', name: 'Citrus Salmon Bowl', price: 21.0, category: 'Lunch', rating: 4.8, reviews: 95, isNew: true },
  { id: '3', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop', name: 'Garden Harvest Salad', price: 16.0, originalPrice: 19.0, category: 'Healthy', rating: 4.7, reviews: 156, onSale: true },
  { id: '4', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop', name: 'Molten Chocolate Cake', price: 12.0, category: 'Dessert', rating: 4.9, reviews: 84, isNew: true },
];

export const TrendingProducts: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-accent font-bold uppercase tracking-widest mb-3">Chef Picks</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-display">Most Loved Dishes</h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">Customer favorites made fresh every day with seasonal ingredients.</p>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <motion.div key={product.id}>
            <ProductCard {...product} onClick={() => console.log('View dish:', product.id)} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
