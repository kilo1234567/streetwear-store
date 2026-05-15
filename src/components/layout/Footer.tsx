import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const footerLinks = {
  'Shop': ['/shop', '/about', '/contact'],
  'Customer Service': ['/faq', '/shipping', '/returns', '/support'],
  'Company': ['/about', '/careers', '/press', '/sustainability'],
  'Legal': ['/privacy', '/terms', '/cookies', '/accessibility'],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-neutral-800"
        >
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">Stay Updated</h3>
            <p className="text-neutral-400 mb-6">
              Subscribe to our newsletter for exclusive drops, style tips, and early access to new collections.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-neutral-900 font-bold rounded-lg hover:bg-neutral-200 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-neutral-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold font-display mb-4">streetwear</h2>
            <p className="text-neutral-400 text-sm mb-6">
              Premium streetwear fashion for the modern individual. Quality. Style. Culture.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaTwitter, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaFacebook, href: '#' },
                { icon: FaLinkedin, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href={link}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.replace('/', '').charAt(0).toUpperCase() + link.slice(2)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
                <FiPhone size={16} />
                +1 (234) 567-890
              </a>
              <a href="mailto:info@streetwear.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <FiMail size={16} />
                info@streetwear.com
              </a>
              <div className="flex items-center gap-2">
                <FiMapPin size={16} />
                <span>123 Fashion St, NY 10001</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
          <p>&copy; 2026 Streetwear Store. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
