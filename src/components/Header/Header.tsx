import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <DesktopNav />
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
        <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
}