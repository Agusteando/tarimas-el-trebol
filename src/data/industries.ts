export type Industry = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
};

export type IndustryProof = {
  title: string;
  description: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    id: 'alimenticio',
    title: 'Alimenticio',
    description: 'Tarimas seguras y sanitarias para manejo y distribución de alimentos.',
    image: '/images/industries/sector-alimenticio.webp',
    icon: 'food'
  },
  {
    id: 'metalurgico',
    title: 'Metalúrgico',
    description: 'Soluciones robustas para cargas pesadas y operación industrial exigente.',
    image: '/images/industries/sector-metalurgico.webp',
    icon: 'metal'
  },
  {
    id: 'construccion',
    title: 'Construcción',
    description: 'Tarimas resistentes para materiales, obra y entornos de alto desgaste.',
    image: '/images/industries/sector-construccion.webp',
    icon: 'shovel'
  },
  {
    id: 'transporte-logistica',
    title: 'Transporte y logística',
    description: 'Movimiento, almacenamiento y distribución con mayor eficiencia.',
    image: '/images/industries/sector-transporte-logistica.webp',
    icon: 'truck'
  },
  {
    id: 'buques-carga-industrial',
    title: 'Buques / carga industrial',
    description: 'Manejo constante de mercancía y operación de carga especializada.',
    image: '/images/industries/sector-buques-carga-industrial.webp',
    icon: 'ship'
  },
  {
    id: 'todos-los-sectores',
    title: 'Todos los sectores',
    description: 'Adaptamos nuestras tarimas a los requerimientos de tu operación.',
    image: '/images/industries/sector-todos-los-sectores.webp',
    icon: 'clover'
  }
];

export const industryProofs: IndustryProof[] = [
  {
    title: 'Cobertura operativa',
    description: 'Atendemos operaciones en todo México con entregas ágiles y confiables.',
    icon: 'shield'
  },
  {
    title: 'Atención B2B especializada',
    description: 'Soluciones para empresas que exigen calidad, cumplimiento y continuidad.',
    icon: 'users'
  },
  {
    title: 'Soluciones a medida',
    description: 'Diseñamos y fabricamos tarimas que se adaptan a tu operación.',
    icon: 'gear'
  }
];
