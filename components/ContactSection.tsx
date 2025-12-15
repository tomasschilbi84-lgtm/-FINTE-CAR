
import React from 'react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Contactez-nous</h2>
            <h3 className="text-4xl font-bold mb-6">Prêt pour la route ?</h3>
            <p className="text-zinc-400 mb-10 leading-relaxed">
              Que vous ayez une question sur un modèle spécifique ou que vous souhaitiez une offre personnalisée, notre équipe est à votre disposition 24h/24 et 7j/7.
            </p>

            <div className="space-y-6">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center rounded-full transition-transform group-hover:rotate-12">
                  <span>📞</span>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase font-bold">Téléphone</div>
                  <div className="text-xl font-bold">{PHONE_NUMBER}</div>
                </div>
              </a>

              <a href={WHATSAPP_LINK} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-green-600 flex items-center justify-center rounded-full transition-transform group-hover:rotate-12">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.258.405 2.424 1.092 3.373L6.5 18.5l3.297-.841a5.733 5.733 0 0 0 2.234.46c3.181 0 5.767-2.586 5.767-5.767s-2.586-5.767-5.767-5.767zm3.385 8.164c-.144.405-.838.74-1.157.779-.318.04-1.107.247-2.607-.373-1.499-.619-2.536-2.147-2.61-2.246-.073-.1-.611-.812-.611-1.549 0-.737.385-1.101.522-1.249.137-.148.303-.185.405-.185h.262c.074 0 .174.004.251.185.085.203.292.712.318.766.026.054.043.118.007.191-.036.074-.055.122-.11.185-.055.063-.118.14-.168.188-.055.054-.112.112-.048.223.064.111.284.469.609.758.419.373.771.488.882.543.111.055.176.046.241-.028.065-.074.278-.323.352-.433.074-.11.148-.092.25-.055.101.037.643.303.754.359.111.055.185.083.212.13.027.046.027.268-.117.673z"/></svg>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase font-bold">WhatsApp</div>
                  <div className="text-xl font-bold">Contact Rapide</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center rounded-full">
                  <span>📍</span>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase font-bold">Siège</div>
                  <div className="text-xl font-bold">Maroc (Casablanca, Agadir, Marrakech)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom Complet</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="email@exemple.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all transform active:scale-95"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
