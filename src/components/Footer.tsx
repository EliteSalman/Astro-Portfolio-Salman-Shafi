import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/salman-shafi', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: 'https://github.com/salman-shafi', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/salman_shafi', label: 'Twitter' }
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full bg-repeat bg-[length:60px_60px]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gradient-premium mb-3 sm:mb-4">Salman Shafi</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              System Administrator & DNS Expert from Bogura, Bangladesh. 
              Specializing in enterprise infrastructure and server optimization.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={14} className="text-gray-500 flex-shrink-0" />
                <span className="text-gray-600 text-xs sm:text-sm">Bogura, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-gray-500 flex-shrink-0" />
                <a 
                  href="mailto:hello@salmanshafi.net" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm break-all"
                >
                  hello@salmanshafi.net
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-gray-500 flex-shrink-0" />
                <a 
                  href="tel:+8801603161647" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm"
                >
                  +8801603161647
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2 group text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Connect With Me</h3>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 bg-white rounded-lg sm:rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                >
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-xs sm:text-sm text-center">
                © {currentYear} Salman Shafi. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500">
              <span>Made with</span>
              <Heart size={12} className="text-red-500" />
              <span>using</span>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-100 text-blue-600 rounded-md font-medium text-xs">Next.js</span>
                <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-purple-100 text-purple-600 rounded-md font-medium text-xs">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 