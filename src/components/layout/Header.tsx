import React, { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { motion } from 'framer-motion';
import { FiSearch, FiShoppingBag, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Reservations', href: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-neutral-900 dark:text-white font-display"
            >
               Restorent
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-250 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Search"
            >
              <FiSearch size={20} className="text-neutral-900 dark:text-white" />
            </motion.button>

            {/* Wishlist */}
            <Link href="/wishlist">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors relative"
              >
                <FiHeart size={20} className="text-neutral-900 dark:text-white" />
                {wishlistItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {wishlistItems.length}
                  </span>
                )}
              </motion.div>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors relative"
              >
                <FiShoppingBag size={20} className="text-neutral-900 dark:text-white" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </motion.div>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX size={20} className="text-neutral-900 dark:text-white" />
              ) : (
                <FiMenu size={20} className="text-neutral-900 dark:text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pb-4"
          >
            <input
              type="text"
              placeholder="Search dishes, cuisines, specials..."
              className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
              autoFocus
            />
          </motion.div>
        )}
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800"
        >
          <nav className="flex flex-col p-4 gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-700 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};
