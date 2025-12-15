
import React from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Pourquoi nous choisir ?</h2>
          <h3 className="text-4xl font-bold mb-4">Services de qualité supérieure</h3>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="p-8 bg-zinc-950 border border-zinc-800 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
