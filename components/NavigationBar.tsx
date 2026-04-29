'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Users, ShoppingBag, Moon, Sun, Home } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import DisclaimerModal from './DisclaimerModal';

export default function NavigationBar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [showAsportoDisclaimer, setShowAsportoDisclaimer] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Top */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className={`flex items-center space-x-2 transition-colors ${
                pathname === '/'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              href="/menu"
              className={`flex items-center space-x-2 transition-colors ${
                pathname === '/menu'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <Menu size={20} />
              <span>Menù</span>
            </Link>
            <Link
              href="/chi-siamo"
              className={`flex items-center space-x-2 transition-colors ${
                pathname === '/chi-siamo'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <Users size={20} />
              <span>Chi siamo</span>
            </Link>
            <button
              onClick={() => setShowAsportoDisclaimer(true)}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ShoppingBag size={20} />
              <span>Asporto</span>
            </button>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="flex justify-around items-center py-2">
          <Link
            href="/"
            className={`flex flex-col items-center space-y-1 p-3 transition-colors ${
              pathname === '/'
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            <Home size={24} />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            href="/menu"
            className={`flex flex-col items-center space-y-1 p-3 transition-colors ${
              pathname === '/menu'
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            <Menu size={24} />
            <span className="text-xs">Menù</span>
          </Link>
          <Link
            href="/chi-siamo"
            className={`flex flex-col items-center space-y-1 p-3 transition-colors ${
              pathname === '/chi-siamo'
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            <Users size={24} />
            <span className="text-xs">Chi siamo</span>
          </Link>
          <button
            onClick={() => setShowAsportoDisclaimer(true)}
            className="flex flex-col items-center space-y-1 p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ShoppingBag size={24} />
            <span className="text-xs">Asporto</span>
          </button>
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center space-y-1 p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            <span className="text-xs">Tema</span>
          </button>
        </div>
      </nav>

      {/* Disclaimer Modals */}
      <DisclaimerModal
        isOpen={showAsportoDisclaimer}
        onClose={() => setShowAsportoDisclaimer(false)}
      />
    </>
  );
}




