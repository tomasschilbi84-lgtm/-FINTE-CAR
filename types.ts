
export interface Car {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Économique' | 'Luxe' | '4x4' | 'Citadine';
  transmission: 'Manuelle' | 'Automatique';
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
