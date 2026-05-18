import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const features = [
  { icon: '🍽️', title: 'Fresh Ingredients', description: 'Locally sourced produce daily' },
  { icon: '⏰', title: 'Open Late', description: 'Serving dinner until 11 PM' },
  { icon: '🥗', title: 'Diet Friendly', description: 'Vegan & gluten-free options' },
  { icon: '📅', title: 'Easy Booking', description: 'Reserve your table in minutes' },
];

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-display mb-6 leading-tight">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200">Restorent</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
          A modern neighborhood restaurant with chef-crafted plates, handcrafted cocktails, and a warm dining experience.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100">Book a Table</Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">View Menu</Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/10">
          {features.map((feature) => (
            <motion.div key={feature.title} whileHover={{ y: -4 }} className="text-center">
              <p className="text-3xl mb-3">{feature.icon}</p>
              <h3 className="text-white font-bold mb-1">{feature.title}</h3>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
