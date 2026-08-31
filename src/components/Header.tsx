'use client';
import { useEffect, useState } from 'react';

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
    { href: '#contact', label: '~/contact' },
  ];
  return (
    <header className={`fixed top-0 w-full z-50 font-mono transition-colors duration-200 ${isScrolled ? 'bg-black/95 border-b border-[#1e1e1e] backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-lg font-bold text-[#e5e5e5] hover:text-[#EE0000] transition-colors glitch-hover">salman@infra:~#</a>
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-[#888] hover:text-[#EE0000] transition-colors">{item.label}</a>)}
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#888] hover:text-white transition-colors" aria-expanded={isMenuOpen} aria-label="Toggle menu">[MENU]</button>
        </div>
        {isMenuOpen && <div className="md:hidden bg-[#050505] border border-[#1e1e1e] p-4 flex flex-col space-y-4 mb-4">
          {menuItems.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-sm text-[#888] hover:text-[#EE0000]">{item.label}</a>)}
        </div>}
      </div>
    </header>
  );
}
