import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
}

const badgeVariants = {
  primary: 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900',
  secondary: 'bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-white',
  accent: 'bg-accent text-white',
  success: 'bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100',
  warning: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100',
  danger: 'bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100',
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${badgeVariants[variant]}`}
    >
      {children}
    </motion.span>
  );
};
