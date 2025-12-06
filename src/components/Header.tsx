'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// Note: Menu, X, ChevronDown imports removed as they're not used in current implementation

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 relative">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 sm:bg-gradient-to-r sm:from-blue-600 sm:to-purple-600 sm:bg-clip-text sm:text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 py-2 -ml-1"
          >
            Salman Shafi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 relative group text-sm lg:text-base"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#contact"
              className="px-4 py-2 lg:px-6 lg:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 text-sm lg:text-base"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/80 transition-all duration-300 relative -mr-1"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 sm:py-5">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl border border-gray-200/50 shadow-xl p-3 sm:p-4 space-y-1 sm:space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 sm:pt-4 border-t border-gray-200">
                <Link
                  href="#contact"
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 