import React from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Jordan Smith',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Morgan Lee',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
];

const About: NextPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 font-display">
            About Streetwear Store
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            We're a premium fashion brand dedicated to bringing authentic streetwear culture to the modern world.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="bg-neutral-100 dark:bg-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1556821552-7f41f7aadb5f?w=600&h=600&fit=crop"
                alt="Our Story"
                className="rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6 font-display">
                Our Story
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-lg leading-relaxed">
                Founded in 2020, Streetwear Store began as a passion project to celebrate urban fashion culture. What started as a small collection has grown into a global movement, connecting street style enthusiasts worldwide.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                We believe in quality over quantity, sustainability over trends, and authenticity over pretense. Every piece in our collection is carefully curated to embody the spirit of modern streetwear.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-neutral-900 dark:text-white mb-12 text-center font-display"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🎨',
              title: 'Quality Design',
              description: 'Every piece is designed with meticulous attention to detail and aesthetic excellence.',
            },
            {
              icon: '♻️',
              title: 'Sustainability',
              description: 'We are committed to eco-friendly practices and sustainable fashion choices.',
            },
            {
              icon: '🤝',
              title: 'Community',
              description: 'We celebrate the culture and community that make streetwear truly authentic.',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-5xl mb-4">{value.icon}</p>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 font-display">
                {value.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-neutral-100 dark:bg-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-neutral-900 dark:text-white mb-12 text-center font-display"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6 font-display">
            Join the Movement
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Be part of our community and celebrate authentic streetwear culture.
          </p>
          <Button size="lg" className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
            Shop Now
          </Button>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
