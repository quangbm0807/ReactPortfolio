import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="fixed w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            Portfolio
          </h1>

          <nav className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 hover:text-primary-500 dark:text-slate-300 
                         dark:hover:text-primary-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 
                     hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};