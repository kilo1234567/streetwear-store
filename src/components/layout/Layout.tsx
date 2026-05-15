import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        {children}
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};
