import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Kaise Kaam Karta Hai', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg-light/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-200/50' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Atmous Mind" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => 
                  `font-body font-medium transition-colors ${isActive ? 'text-[#E8251A]' : 'text-text-dark hover:text-[#E8251A]'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="#book-demo" 
              className="bg-primary text-white font-body font-medium px-6 py-2.5 rounded-lg hover:bg-red-700 transition-colors animate-pulse-glow border-none"
            >
              Demo Book Karo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-dark hover:text-primary transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-light shadow-md border-t border-gray-200">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `font-body font-medium transition-colors text-lg ${isActive ? 'text-[#E8251A]' : 'text-text-dark hover:text-[#E8251A]'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="#book-demo" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center bg-primary text-white font-body font-medium px-6 py-3 min-h-[52px] rounded-lg hover:bg-red-700 transition-colors"
            >
              Demo Book Karo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
