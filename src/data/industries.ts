export type Industry = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    id: 'alimenticio',
    title: 'Alimenticio',
    description: 'Tarimas seguras y sanitarias para el manejo de alimentos.',
    image: '/images/sector-food.svg',
    icon: '◒'
  },
  {
    id: 'metalurgico',
    title: 'Metalúrgico',
    description: 'Soluciones robustas para cargas pesadas y materiales industriales.',
    image: '/images/sector-metal.svg',
    icon: '◆'
  },
  {
    id: 'construccion',
    title: 'Construcción',
    description: 'Tarimas resistentes y duraderas para entornos exigentes.',
    image: '/images/sector-construction.svg',
    icon: '▲'
  },
  {
    id: 'transporte',
    title: 'Transporte y logística',
    description: 'Tarimas para almacenamiento, distribución y movimiento eficiente.',
    image: '/images/sector-logistics.svg',
    icon: '▰'
  },
  {
    id: 'buques',
    title: 'Buques y carga industrial',
    description: 'Soluciones para empresas que requieren manejo constante de mercancía.',
    image: '/images/sector-port.svg',
    icon: '⌁'
  }
];
