// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Sections/Hero';
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';
import { Footer } from './components/Layout/Footer';
import { ArrowUp } from 'lucide-react';
const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white 
                    dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 p-3 rounded-full bg-primary-500 
                   text-white shadow-lg hover:bg-primary-600 transition-all 
                   animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;