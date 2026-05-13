export type ProductQuality = {
  title: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  measure?: string;
  image: string;
  summary: string;
  qualities?: ProductQuality[];
  highlights: string[];
  quoteMessage: string;
  sheetMessage: string;
};

const imageBase = '/images/products';

const qualityDescriptions: ProductQuality[] = [
  {
    title: 'Primera calidad · Nueva',
    description: 'Fabricada con madera nueva para operaciones que requieren mejor presentación, resistencia uniforme y continuidad de suministro.'
  },
  {
    title: 'Segunda calidad · Reciclada',
    description: 'Tarima reciclada revisada para optimizar costo sin perder funcionalidad en manejo, almacenaje y transporte.'
  },
  {
    title: 'Tercera calidad · Con empalmes',
    description: 'Alternativa funcional con empalmes para usos prácticos donde se busca una solución económica y operativa.'
  }
];

export const allProducts: Product[] = [
  {
    id: 'tacon',
    name: 'Tarima Tacón',
    measure: '3 variantes disponibles',
    image: `${imageBase}/tarima-tacon.webp`,
    summary:
      'Tarima estable para almacenamiento, transporte y operaciones industriales que requieren buen soporte y maniobra segura.',
    qualities: qualityDescriptions,
    highlights: ['Primera', 'Segunda', 'Tercera'],
    quoteMessage: 'Hola, quiero cotizar tarima tacón y revisar sus variantes primera, segunda y tercera.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima tacón y sus variantes primera, segunda y tercera.'
  },
  {
    id: 'barrote',
    name: 'Tarima Barrote',
    measure: '3 variantes disponibles',
    image: `${imageBase}/tarima-barrote.webp`,
    summary:
      'La opción más resistente para cargas pesadas, uso rudo y operaciones donde la durabilidad es prioridad.',
    qualities: qualityDescriptions,
    highlights: ['Primera', 'Segunda', 'Tercera'],
    quoteMessage: 'Hola, quiero cotizar tarima barrote y revisar sus variantes primera, segunda y tercera.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima barrote y sus variantes primera, segunda y tercera.'
  },
  {
    id: 'tipo-chep',
    name: 'Tarima Tipo Cheep',
    image: `${imageBase}/tarima-tipo-chep.webp`,
    summary:
      'Tarima ligera y práctica para manejo, almacenamiento, distribución y operaciones donde se requiere una base funcional y ágil.',
    highlights: ['Ligera', 'Práctica', 'Operativa'],
    quoteMessage: 'Hola, quiero cotizar tarima tipo cheep.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima tipo cheep.'
  },
  {
    id: 'hibrida',
    name: 'Tarima Híbrida',
    image: `${imageBase}/tarima-hibrida.webp`,
    summary:
      'Tarima fabricada con combinación de tablas recicladas y nuevas para equilibrar costo, disponibilidad y desempeño operativo.',
    highlights: ['Reciclada', 'Nueva', 'Mixta'],
    quoteMessage: 'Hola, quiero cotizar tarima híbrida con tablas recicladas y nuevas.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima híbrida con tablas recicladas y nuevas.'
  }
];

export const totalProductTypes = 8;

export const featuredProducts = allProducts;

export const products = featuredProducts;
