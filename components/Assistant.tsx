
import React, { useState } from 'react';
import { getCarRecommendation } from '../geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Marhaba ! Je suis l\'assistant Finte Car. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const botResponse = await getCarRecommendation(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-red-600 rounded-full shadow-2xl flex items-center justify-center text-3xl transform hover:scale-110 transition-transform animate-pulse"
        >
          🤖
        </button>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-[320px] md:w-[380px] h-[500px] flex flex-col shadow-2xl overflow-hidden">
          <div className="bg-red-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h4 className="font-bold text-sm">Finte Assistant</h4>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-[10px] uppercase font-bold text-zinc-200">En ligne</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-zinc-200">
              ✕
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-zinc-950">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-red-600 text-white rounded-tr-none' : 'bg-zinc-800 text-zinc-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-zinc-900 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-600"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              ➔
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Assistant;
