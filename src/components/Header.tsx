'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    // Updated header to use dark, blurred background on scroll
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-card-background/80 backdrop-blur-lg border-b border-border-color shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 relative">
          
          {/* Logo/Brand updated to use red gradient text */}
          <Link
            href="/"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-red hover:brightness-110 transition-all duration-300 py-2 -ml-1"
          >
            Salman Shafi
          </Link>
          
          {/* Desktop Navigation updated for dark theme */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-input-background font-medium transition-all duration-300 relative group text-sm lg:text-base"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button updated with red gradient */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#contact"
              className="px-4 py-2 lg:px-6 lg:py-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium hover:brightness-110 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button updated for dark theme */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-input-background transition-all duration-300 relative -mr-1"
          >
            <div className="relative w-6 h-6">
              {/* Hamburger lines are now light to be visible on dark background */}
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-gray-200 transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-gray-200 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-gray-200 transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation updated for dark theme */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 sm:py-5">
            <div className="bg-card-background/90 backdrop-blur-lg rounded-2xl border border-border-color shadow-xl p-3 sm:p-4 space-y-1 sm:space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg text-gray-300 hover:text-white hover:bg-input-background font-medium transition-all duration-300 text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 sm:pt-4 border-t border-border-color">
                <Link
                  href="#contact"
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium text-center hover:brightness-110 transition-all duration-300 text-sm sm:text-base"
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

