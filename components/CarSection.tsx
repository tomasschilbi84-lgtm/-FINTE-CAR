
import React from 'react';
import { CARS, WHATSAPP_LINK } from '../constants';
import { Car } from '../types';

const CarCard: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-red-600/50 transition-all duration-500">
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
          {car.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{car.name}</h3>
          <div className="text-right">
            <span className="text-2xl font-bold text-red-600">{car.price}</span>
            <span className="text-xs text-zinc-500 ml-1">DH/Jour</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-zinc-400 mb-6">
          <div className="flex items-center gap-1">
            <span>⚙️</span> {car.transmission}
          </div>
          <div className="flex items-center gap-1">
            <span>❄️</span> Climatisation
          </div>
          <div className="flex items-center gap-1">
            <span>⛽</span> Diesel/Essence
          </div>
        </div>
        <a
          href={WHATSAPP_LINK}
          className="block w-full text-center bg-zinc-800 group-hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors"
        >
          Réserver via WhatsApp
        </a>
      </div>
    </div>
  );
};

const CarSection: React.FC = () => {
  return (
    <section id="voitures" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Notre Flotte</h2>
            <h3 className="text-4xl font-bold">Choisissez votre confort</h3>
          </div>
          <p className="text-zinc-400 max-w-md">
            Une sélection rigoureuse de véhicules récents et entretenus pour garantir votre sécurité et votre plaisir de conduite au Maroc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarSection;
