import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Twitter, Facebook, Instagram, Heart } from 'lucide-react';
import { FaReddit, FaTelegram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/salmanshafi404', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/salmanshafi404', label: 'Twitter' },
    { icon: <FaReddit size={20} />, href: 'https://www.reddit.com/u/Adventurous-Web-451/', label: 'Reddit' },
    { icon: <FaTelegram size={20} />, href: "https://t.me/salmanshafi404", label: "Telegram" },
    { icon: <Facebook size={20} />, href: 'https://facebook.com/salmanshafi400', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/salmanshafi400', label: 'Instagram' }
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    // Use dark background and border colors from our theme
    <footer className="relative bg-[#111111] border-t border-border-color overflow-hidden">
      {/* Subtle background pattern, changed to a neutral dark color */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat bg-[length:60px_60px]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f5255' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Use the red gradient text class from globals.css */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gradient-red mb-3 sm:mb-4">Salman Shafi</h3>
            {/* Use light text colors for dark background */}
            <p className="text-text-body-color mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              System Administrator from Bogura, Bangladesh.
              Specializing in enterprise infrastructure and server optimization.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={14} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">Bogura, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:hello@salmanshafi.net"
                  // Use red hover effect for links
                  className="text-gray-300 hover:text-primary transition-colors text-xs sm:text-sm break-all"
                >
                  hello@salmanshafi.net
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-gray-400 flex-shrink-0" />
                <a
                  href="tel:+8801603161647"
                  className="text-gray-300 hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  +8801603161647
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center space-x-2 group text-sm sm:text-base"
                  >
                    {/* Use red accent color */}
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-4 sm:mb-6">Connect With Me</h3>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Update social links for dark theme
                  className="p-2.5 sm:p-3 bg-input-background rounded-lg sm:rounded-xl border-2 border-border-color hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                >
                  <span className="text-gray-300 group-hover:text-primary transition-colors">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-color pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-xs sm:text-sm text-center">
                © {currentYear} Salman Shafi. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-400">
              <span>Made with</span>
              <Heart size={12} className="text-red-500" />
              <span>using</span>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                {/* Update tech badges for dark theme */}
                <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-800 text-red-400 rounded-md font-medium text-xs">Next.js</span>
                <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-800 text-red-400 rounded-md font-medium text-xs">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

