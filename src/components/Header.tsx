'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', label: '~/home' },
    { href: '#about', label: '~/about' },
    { href: '#skills', label: '~/skills' },
    { href: '#experience', label: '~/experience' },
    { href: '#contact', label: '~/contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 font-mono transition-colors duration-200 ${
      isScrolled ? 'bg-black/95 border-b border-[#1e1e1e] backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          
          <Link 
            href="/" 
            className="text-lg font-bold text-[#e5e5e5] hover:text-[#EE0000] transition-colors glitch-hover"
          >
            salman@infra:~#
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#888] hover:text-[#EE0000] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#888] hover:text-white transition-colors"
          >
            [MENU]
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#050505] border border-[#1e1e1e] p-4 flex flex-col space-y-4 mb-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-[#888] hover:text-[#EE0000]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
