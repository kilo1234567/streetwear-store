import React, { useState } from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { showToast } from '@/components/ui/Toast';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      showToast({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      showToast({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 font-display">
            Get in Touch
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Have a question or feedback? We'd love to hear from you. Contact us anytime!
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          {[
            {
              icon: FiPhone,
              title: 'Phone',
              content: '+1 (234) 567-890',
              subtext: 'Monday - Friday, 9am - 6pm EST',
            },
            {
              icon: FiMail,
              title: 'Email',
              content: 'support@streetwear.com',
              subtext: 'We respond within 24 hours',
            },
            {
              icon: FiMapPin,
              title: 'Location',
              content: '123 Fashion Street',
              subtext: 'New York, NY 10001, USA',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={32} className="text-neutral-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-900 dark:text-white font-medium mb-1">{item.content}</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{item.subtext}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-neutral-50 dark:bg-neutral-800 p-8 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 font-display">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              required
            />
            <div>
              <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={6}
                className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              fullWidth
              isLoading={isSubmitting}
              className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="bg-neutral-100 dark:bg-neutral-800 py-16 md:py-24 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-neutral-900 dark:text-white mb-12 text-center font-display"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {[
              {
                q: 'What are your shipping times?',
                a: 'We ship within 1-2 business days. Delivery typically takes 3-5 business days.',
              },
              {
                q: 'Do you offer returns?',
                a: 'Yes! We offer 30-day free returns on all orders. See our returns policy for details.',
              },
              {
                q: 'How do I track my order?',
                a: 'You\'ll receive a tracking number via email as soon as your order ships.',
              },
              {
                q: 'Do you ship internationally?',
                a: 'Yes, we ship worldwide! International shipping rates vary by location.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-700 p-6 rounded-lg"
              >
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
