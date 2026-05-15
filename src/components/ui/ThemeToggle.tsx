import React, { useState, useEffect } from 'react';
import { useThemeStore } from '@/store/uiStore';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Apply theme on mount
    const isDark = localStorage.getItem('theme-storage')
      ? JSON.parse(localStorage.getItem('theme-storage') || '{}').state?.darkMode
      : false;

    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggle = () => {
    toggleDarkMode();
    const newDarkMode = !darkMode;
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </motion.button>
  );
};
