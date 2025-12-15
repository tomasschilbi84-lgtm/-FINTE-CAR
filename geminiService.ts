
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCarRecommendation = async (query: string) => {
  if (!process.env.API_KEY) return "Désolé, l'assistant est temporairement indisponible.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Tu es un assistant expert pour "FINTE CAR", une agence de location de voitures au Maroc. 
      Réponds en français (tu peux utiliser "Marhaba" ou d'autres mots simples en arabe). 
      Sois accueillant et professionnel. 
      Voici les voitures disponibles : Dacia Logan (250 DH), Clio 5 (350 DH), Range Rover (1200 DH), Golf 8 (500 DH), Hyundai Tucson (600 DH).
      Le client demande : ${query}`,
      config: {
        maxOutputTokens: 250,
        temperature: 0.7,
      }
    });

    return response.text || "Je suis là pour vous aider à choisir la meilleure voiture.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur est survenue lors de la discussion. Veuillez nous appeler directement au +212661896452.";
  }
};
