import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, className, ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
      >
        {label && (
          <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={clsx(
              'w-full px-4 py-2.5 border border-neutral-200 rounded-lg bg-white text-neutral-900 transition-all duration-250',
              'focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:ring-opacity-20',
              'dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:focus:border-white dark:focus:ring-white',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              icon && 'pl-10',
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {helperText && !error && <p className="text-neutral-500 text-sm mt-1">{helperText}</p>}
      </motion.div>
    );
  }
);

Input.displayName = 'Input';
