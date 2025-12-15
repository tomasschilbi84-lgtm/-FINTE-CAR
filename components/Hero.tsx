
import React from 'react';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Luxury Car Morocco"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4 animate-fade-in">Marhaba chez Finte Car</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Location de Voitures au <span className="text-red-600">Maroc</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Profitez de votre séjour avec des voitures confortables à des prix abordables. Livraison rapide partout au royaume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-red-600 hover:bg-red-700 text-white text-center px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-red-900/20"
            >
              Appelez maintenant {PHONE_NUMBER}
            </a>
            <a
              href="#voitures"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-center px-8 py-4 rounded-lg font-bold text-lg border border-white/20 transition-all"
            >
              Voir nos voitures
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-xs uppercase tracking-widest mb-2">Découvrir</span>
        <div className="w-px h-12 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
