import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

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
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1552289550-fee650e4b0e9?w=500&h=500&fit=crop',
    name: 'Vintage Cap',
    price: 34.99,
    category: 'Accessories',
    rating: 4.5,
    reviews: 42,
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    name: 'Air Max Sneakers',
    price: 124.99,
    originalPrice: 149.99,
    category: 'Footwear',
    rating: 4.8,
    reviews: 203,
    onSale: true,
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1549887534-7eb0a400fe5e?w=500&h=500&fit=crop',
    name: 'Oversized Tee',
    price: 49.99,
    category: 'T-Shirts',
    rating: 4.7,
    reviews: 76,
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    name: 'Track Pants',
    price: 69.99,
    category: 'Pants',
    rating: 4.6,
    reviews: 98,
  },
];

const Shop: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['Hoodies', 'T-Shirts', 'Pants', 'Jackets', 'Accessories', 'Footwear'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  return (
    <Layout>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white font-display mb-4">
            Shop Our Collection
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl">
            Discover premium streetwear pieces curated for modern style. Filter by category, size, or price.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Category Filter */}
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block text-sm py-2 transition-colors ${
                    selectedCategory === null
                      ? 'text-neutral-900 dark:text-white font-bold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block text-sm py-2 transition-colors ${
                      selectedCategory === category
                        ? 'text-neutral-900 dark:text-white font-bold'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    className={`py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Price Range</h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-4">
            {/* Sort and Results Count */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-neutral-200 dark:border-neutral-700">
              <p className="text-neutral-600 dark:text-neutral-400">
                Showing {filteredProducts.length} products
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm text-neutral-600 dark:text-neutral-400">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="trending">Trending</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onClick={() => console.log('Navigate to product:', product.id)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
