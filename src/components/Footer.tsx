'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#1e1e1e] font-mono py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          
          <div className="flex flex-col space-y-2">
            <span className="text-[#e5e5e5] font-bold">Connection closed by foreign host.</span>
            <span className="text-[#555] text-xs">EOF</span>
          </div>

          <div className="flex space-x-6 text-sm">
            <Link 
              href="https://github.com/EliteSalman" 
              target="_blank"
              className="text-[#888] hover:text-[#EE0000] transition-colors glitch-hover"
            >
              [GITHUB]
            </Link>
            <Link 
              href="https://twitter.com/EliteSalmanX" 
              target="_blank"
              className="text-[#888] hover:text-[#EE0000] transition-colors glitch-hover"
            >
              [TWITTER/X]
            </Link>
          </div>
          
        </div>

        <div className="mt-12 pt-6 border-t border-[#1e1e1e] flex flex-col md:flex-row justify-between items-center text-xs text-[#555]">
          <span>© {currentYear} Salman Shafi. All rights reserved.</span>
          <span className="mt-4 md:mt-0">Rendered via Next.js // Hosted on AlmaLinux 10</span>
        </div>

      </div>
    </footer>
  );
}
