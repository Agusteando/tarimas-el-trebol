export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type ServiceProof = {
  title: string;
  text: string;
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
    description: 'Retiramos tarimas usadas para extender su vida útil en nuevos ciclos.',
    icon: 'pallet'
  },
  {
    title: 'Playo',
    description: 'Recolección de playo y embalaje de madera para su reutilización.',
    icon: 'truck'
  },
  {
    title: 'Metal',
    description: 'Reciclaje de metales y perfiles con manejo responsable.',
    icon: 'metal'
  },
  {
    title: 'Cartón',
    description: 'Manejo y reciclaje de cartón industrial y comercial.',
    icon: 'box'
  },
  {
    title: 'Otros materiales industriales',
    description: 'Soluciones para otros materiales reciclables según tus necesidades.',
    icon: 'dots'
  }
];

export const serviceProofs: ServiceProof[] = [
  {
    title: 'Limpieza operativa',
    text: 'Liberamos espacio en tu planta o almacén para que tu operación fluya mejor.',
    icon: 'leaf'
  },
  {
    title: 'Recolección programada',
    text: 'Nos adaptamos a tus horarios y volúmenes para una logística eficiente.',
    icon: 'calendar'
  },
  {
    title: 'Manejo responsable',
    text: 'Aseguramos el destino adecuado de cada material con procesos sostenibles.',
    icon: 'shield'
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
