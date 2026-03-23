import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A0A0A] border-t border-white/5 pt-12 pb-6 px-4 md:px-8 font-body">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left flex-wrap">
        <div className="text-gray-400 font-medium w-full md:w-auto order-3 md:order-1">
          Atmous Minds &copy; {new Date().getFullYear()}
        </div>
        
        <div className="text-gray-300 font-bold tracking-wide text-lg w-full md:w-auto order-1 md:order-2 mb-4 md:mb-0">
          Tally se poochho, <span className="text-[#E8251A]">jawab milega.</span>
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-gray-400 w-full justify-center md:justify-end md:w-auto flex-wrap order-2 md:order-3">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/how-it-works" className="hover:text-white transition-colors">Kaise Kaam Karta Hai</Link>
          <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-600 mt-8">
        Made with ❤️ for Indian Business Owners
      </div>
    </footer>
  );
};

export default Footer;
