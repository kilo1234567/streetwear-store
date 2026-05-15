import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useThemeStore } from '@/store/uiStore';
import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return <Component {...pageProps} />;
}

export default App;
