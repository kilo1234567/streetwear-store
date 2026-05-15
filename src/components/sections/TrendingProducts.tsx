import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/Card';

const trendingProducts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1556821552-7f41f7aadb5f?w=500&h=500&fit=crop',
    name: 'Classic Black Hoodie',
    price: 89.99,
    category: 'Hoodies',
    rating: 4.8,
    reviews: 128,
    isTrending: true,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    name: 'Premium White Tee',
    price: 39.99,
    category: 'T-Shirts',
    rating: 4.6,
    reviews: 95,
    isNew: true,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop',
    name: 'Slim Fit Jeans',
    price: 79.99,
    originalPrice: 99.99,
    category: 'Pants',
    rating: 4.7,
    reviews: 156,
    onSale: true,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1539533057440-7a601feb0b89?w=500&h=500&fit=crop',
    name: 'Statement Jacket',
    price: 149.99,
    category: 'Jackets',
    rating: 4.9,
    reviews: 84,
    isNew: true,
  },
];

export const TrendingProducts: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-accent font-bold uppercase tracking-widest mb-3">This Season</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-display">
          Trending Now
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
          Discover the hottest pieces everyone's wearing this season. Limited stock available.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {trendingProducts.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard
              {...product}
              onClick={() => console.log('Navigate to product:', product.id)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
