export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-[#1e1e1e] font-mono pt-12 pb-[calc(3rem+env(safe-area-inset-bottom))]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="flex flex-col space-y-2"><span className="text-[#e5e5e5] font-bold">Connection closed by foreign host.</span><span className="text-[#555] text-xs">EOF</span></div>
          <div className="flex space-x-8 text-sm">
            <a href="https://github.com/EliteSalman" target="_blank" rel="noreferrer" className="text-[#888] hover:text-[#EE0000] transition-colors glitch-hover p-3 -m-3">[GITHUB]</a>
            <a href="https://twitter.com/EliteSalmanX" target="_blank" rel="noreferrer" className="text-[#888] hover:text-[#EE0000] transition-colors glitch-hover p-3 -m-3">[TWITTER/X]</a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[#1e1e1e] flex flex-col md:flex-row justify-between items-center text-xs text-[#555] leading-relaxed">
          <span>© {currentYear} Salman Shafi. All rights reserved.</span>
          <span className="mt-4 md:mt-0 break-words text-center md:text-right">Rendered via Astro // Infrastructure agnostic</span>
        </div>
      </div>
    </footer>
  );
}
