export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const additionalServices: Service[] = [
  {
    title: 'Recolección de tarima',
    description: 'Retiro de tarima usada para liberar espacio operativo.',
    icon: '↻'
  },
  {
    title: 'Playo',
    description: 'Recolección de materiales plásticos industriales aprovechables.',
    icon: '◌'
  },
  {
    title: 'Metal',
    description: 'Gestión de chatarra metálica industrial de forma ordenada.',
    icon: '▦'
  },
  {
    title: 'Cartón',
    description: 'Retiro de cartón y empaques industriales acumulados.',
    icon: '□'
  }
];

export const solutionPoints = [
  'Diferentes medidas',
  'Diferentes capacidades',
  'Materiales duraderos',
  'Opciones recicladas',
  'Soluciones para operación industrial'
];
