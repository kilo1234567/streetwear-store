import React from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/sections/HeroBanner';
import { TrendingProducts } from '@/components/sections/TrendingProducts';
import { FeaturedCollections } from '@/components/sections/FeaturedCollections';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroBanner />
      <FeaturedCollections />
      <TrendingProducts />

      {/* Call to Action Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-8 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Reserve Your Next Meal</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8 text-lg">
            Be first to hear about tasting nights, chef specials, and holiday reservations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-neutral-900 font-bold rounded-lg hover:bg-neutral-100 transition-colors whitespace-nowrap">
              Reserve Updates
            </button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Home;
