export type Product = {
  id: string;
  name: string;
  measure?: string;
  image: string;
  summary: string;
  variants: string[];
  highlights: string[];
  quoteMessage: string;
};

export const products: Product[] = [
  {
    id: 'barrote',
    name: 'Tarima Barrote',
    measure: '1.00 × 1.20 m',
    image: '/images/products/tarima-barrote.webp',
    summary: 'La opción más resistente para cargas pesadas y uso rudo en la industria.',
    variants: ['Nueva tratada', 'Usada sin empalme / reciclada', 'De tercera con empalme'],
    highlights: ['Alta resistencia', 'Uso rudo', 'Reutilizable'],
    quoteMessage: 'Hola, quiero cotizar tarima de barrote 1.00 x 1.20 m para mi empresa.'
  },
  {
    id: 'tacon',
    name: 'Tarima Tacón',
    measure: '1.00 × 1.20 m',
    image: '/images/products/tarima-tacon.webp',
    summary: 'Mayor estabilidad y soporte para almacenamiento y transporte seguro.',
    variants: ['Estándar de tercera con empalme', 'Estándar reciclada sin empalmes', 'Estándar nueva'],
    highlights: ['Estabilidad', 'Apilable', 'Duradera'],
    quoteMessage: 'Hola, quiero cotizar tarima de tacón 1.00 x 1.20 m para mi empresa.'
  },
  {
    id: 'cheep',
    name: 'Tarima Tipo Cheep',
    image: '/images/products/tarima-cheep.webp',
    summary: 'Ligera y práctica para exportación, almacenaje y un solo uso.',
    variants: ['Reciclada', 'Nueva'],
    highlights: ['Ligera', 'Económica', 'Exportación'],
    quoteMessage: 'Hola, quiero cotizar tarima tipo cheep para mi empresa.'
  }
];
