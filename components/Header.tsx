
import React from 'react';
import { NAV_LINKS, PHONE_NUMBER } from '../constants';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter text-red-600">FINTE CAR</span>
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold -mt-1">Location de Voitures</span>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-red-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="ml-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            {PHONE_NUMBER}
          </a>
        </nav>

        <a href={`tel:${PHONE_NUMBER}`} className="md:hidden text-red-600 font-bold">
          Appeler
        </a>
      </div>
    </header>
  );
};

export default Header;
