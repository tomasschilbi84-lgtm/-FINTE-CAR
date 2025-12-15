
import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold tracking-tighter text-red-600">FINTE CAR</span>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Location de Voitures au Maroc</span>
          </div>

          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">f</div>
            <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">in</div>
            <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">ig</div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm italic">
            "Marhaba bikoum chez Finte Car"
          </p>
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} FINTE CAR – Location de Voitures. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
