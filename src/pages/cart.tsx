import React from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';
import { FiTrash2, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { formatPrice } from '@/utils/helpers';

const Cart: NextPage = () => {
  const { items, total, removeItem, updateQuantity, clearCart } = useCartStore();

  const shipping = total >= 100 ? 0 : total >= 50 ? 5 : 10;
  const tax = Math.round(total * 0.1 * 100) / 100;
  const subtotal = total;
  const grandTotal = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 font-display">
              Your cart is empty
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">
              Discover our latest collection and start shopping.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
                Continue Shopping
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-4"
        >
          <Link href="/shop">
            <button className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <FiArrowLeft size={20} />
              Continue Shopping
            </button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8 font-display">
              Shopping Cart
            </h1>

            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-6 bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-900 dark:text-white">{item.product.name}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      {item.selectedColor} • Size {item.selectedSize}
                    </p>
                    <p className="font-bold text-neutral-900 dark:text-white">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-display">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-700">
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>Tax (10%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="mb-6 flex justify-between text-xl font-bold text-neutral-900 dark:text-white">
                <span>Total</span>
                <span>{formatPrice(grandTotal)}</span>
              </div>

              <Button size="lg" fullWidth className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 mb-3">
                Proceed to Checkout
              </Button>
              <Button size="lg" fullWidth variant="outline" className="border-neutral-900 dark:border-white text-neutral-900 dark:text-white">
                Continue Shopping
              </Button>

              <button
                onClick={() => clearCart()}
                className="w-full mt-4 text-red-500 hover:text-red-600 text-sm font-medium transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
