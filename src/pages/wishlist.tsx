import React from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/Card';
import { useWishlistStore } from '@/store/wishlistStore';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const products = [
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
];

const Wishlist: NextPage = () => {
  const { items } = useWishlistStore();

  const wishlistProducts = products.filter((p) =>
    items.some((item) => item.productId === p.id)
  );

  if (wishlistProducts.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 font-display">
              Your wishlist is empty
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">
              Add items to your wishlist to save them for later.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-neutral-900 dark:text-white mb-12 font-display"
        >
          My Wishlist ({wishlistProducts.length})
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {wishlistProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={() => console.log('Navigate to product:', product.id)}
            />
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Wishlist;
