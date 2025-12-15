
import React from 'react';
import { Car, Service, NavLink } from './types';

export const PHONE_NUMBER = "+212661896452";
export const WHATSAPP_LINK = "https://wa.me/212661896452";

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Voitures', href: '#voitures' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const CARS: Car[] = [
  {
    id: '1',
    name: 'Dacia Logan Stepway',
    price: 250,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800&auto=format&fit=crop',
    category: 'Économique',
    transmission: 'Manuelle'
  },
  {
    id: '2',
    name: 'Renault Clio 5',
    price: 350,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop',
    category: 'Citadine',
    transmission: 'Manuelle'
  },
  {
    id: '3',
    name: 'Range Rover Evoque',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop',
    category: 'Luxe',
    transmission: 'Automatique'
  },
  {
    id: '4',
    name: 'Volkswagen Golf 8',
    price: 500,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
    category: 'Citadine',
    transmission: 'Automatique'
  },
  {
    id: '5',
    name: 'Hyundai Tucson',
    price: 600,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    category: '4x4',
    transmission: 'Automatique'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Longue et Courte Durée',
    description: 'Des formules flexibles adaptées à vos besoins, que ce soit pour une journée ou plusieurs mois.',
    icon: '📅'
  },
  {
    title: 'Livraison Aéroport',
    description: 'Nous vous livrons votre véhicule directement aux aéroports (Casablanca, Marrakech, Agadir).',
    icon: '✈️'
  },
  {
    title: 'Assurance Incluse',
    description: 'Toutes nos voitures sont couvertes par une assurance complète pour votre tranquillité.',
    icon: '🛡️'
  },
  {
    title: 'Assistance 24/7',
    description: 'Une équipe dédiée à votre service partout au Maroc en cas de besoin.',
    icon: '📞'
  }
];
