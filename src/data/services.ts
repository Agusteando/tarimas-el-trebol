export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type SolutionChip = {
  label: string;
  icon: string;
};

export type SolutionProof = {
  title: string;
  text: string;
  icon: string;
};

export type SolutionFeature = {
  title: string;
  text: string;
  icon: string;
};

export const additionalServices: Service[] = [
  {
    title: 'Recolección de tarima',
    description: 'Retiro y manejo responsable de tarima usada.',
    icon: 'pallet'
  },
  {
    title: 'Playo',
    description: 'Recolección de playo y materiales plásticos.',
    icon: 'truck'
  },
  {
    title: 'Metal',
    description: 'Reciclaje de metales y perfiles.',
    icon: 'metal'
  },
  {
    title: 'Cartón',
    description: 'Manejo y reciclaje de cartón.',
    icon: 'box'
  },
  {
    title: 'Otros materiales',
    description: 'Soluciones para otros materiales industriales.',
    icon: 'dots'
  }
];

export const solutionChips: SolutionChip[] = [
  { label: 'Diferentes medidas', icon: 'measure' },
  { label: 'Diferentes capacidades', icon: 'weight' },
  { label: 'Materiales duraderos', icon: 'shield' },
  { label: 'Opciones recicladas', icon: 'recycle' },
  { label: 'Operación industrial', icon: 'factory' }
];

export const solutionProofs: SolutionProof[] = [
  {
    title: 'Alta resistencia',
    text: 'Materiales seleccionados para máxima durabilidad.',
    icon: 'shield'
  },
  {
    title: 'Sostenible',
    text: 'Opciones recicladas que cuidan el planeta.',
    icon: 'leaf'
  },
  {
    title: 'Entregas confiables',
    text: 'Cumplimos tiempos y volúmenes requeridos.',
    icon: 'delivery-clock'
  }
];

export const solutionFeatures: SolutionFeature[] = [
  {
    title: 'Medidas a la medida',
    text: 'Adaptamos dimensiones y capacidades según tu operación.',
    icon: 'measure'
  },
  {
    title: 'Alta durabilidad industrial',
    text: 'Materiales y ensambles diseñados para uso intensivo y repetitivo.',
    icon: 'shield'
  },
  {
    title: 'Manejo y almacenamiento óptimo',
    text: 'Diseñadas para mejorar la eficiencia en carga, descarga y almacenamiento.',
    icon: 'box'
  }
];
