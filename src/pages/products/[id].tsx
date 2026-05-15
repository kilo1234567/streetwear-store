import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { FiHeart, FiShare2, FiCheck } from 'react-icons/fi';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { showToast } from '@/components/ui/Toast';
import { generateId } from '@/utils/helpers';

const ProductDetail: NextPage = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { addItem } = useCartStore();
  const { addItem: addToWishlist, isInWishlist } = useWishlistStore();

  const product = {
    id: '1',
    name: 'Premium Black Hoodie',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 128,
    description:
      'Our signature black hoodie crafted from premium 100% organic cotton. Features a custom oversized fit, kangaroo pocket, and embroidered logo. Perfect for everyday wear or layering.',
    images: [
      'https://images.unsplash.com/photo-1556821552-7f41f7aadb5f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556821552-7f41f7aadb5f?w=800&h=800&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Gray', hex: '#808080' },
    ],
    stock: 45,
    material: '100% Organic Cotton',
    care: 'Machine wash cold, hang dry',
    shipping: 'Free shipping on orders over $100',
    returnPolicy: '30-day free returns',
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: generateId('cart'),
      product,
      quantity,
      selectedSize,
      selectedColor,
      addedAt: new Date().toISOString(),
    };
    addItem(cartItem);
    showToast({ type: 'success', message: `${product.name} added to cart!` });
  };

  const handleAddToWishlist = () => {
    addToWishlist(product.id);
    showToast({
      type: 'success',
      message: isInWishlist(product.id) ? 'Removed from wishlist' : 'Added to wishlist!',
    });
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden aspect-square mb-4">
              <img
                src={product.images[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-lg font-bold">
                  -{discount}%
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImageIndex === index
                      ? 'border-neutral-900 dark:border-white'
                      : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="primary">{product.material}</Badge>
                {product.stock < 10 && (
                  <Badge variant="warning">Low Stock</Badge>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white font-display mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-neutral-900 dark:text-white">
                    {product.rating}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">
                        {i < Math.round(product.rating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-neutral-600 dark:text-neutral-400">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-700">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-bold text-neutral-900 dark:text-white">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-neutral-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Including all taxes</p>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <motion.button
                    key={color.name}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-lg border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-neutral-900 dark:border-white ring-2 ring-neutral-900 dark:ring-white'
                        : 'border-neutral-300 dark:border-neutral-600'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor === color.name && (
                      <FiCheck className="w-full h-full flex items-center justify-center text-white" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3">
                <a href="#" className="underline hover:no-underline">
                  Size Guide
                </a>
              </p>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  −
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
              >
                Add to Cart
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToWishlist}
                  className="py-3 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white transition-colors flex items-center justify-center gap-2"
                >
                  <FiHeart size={20} />
                  <span>Wishlist</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-3 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white transition-colors flex items-center justify-center gap-2"
                >
                  <FiShare2 size={20} />
                  <span>Share</span>
                </motion.button>
              </div>
            </div>

            {/* Info */}
            <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-lg">🚚</span>
                <div>
                  <p className="font-bold text-neutral-900 dark:text-white">{product.shipping}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">↩️</span>
                <div>
                  <p className="font-bold text-neutral-900 dark:text-white">{product.returnPolicy}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
