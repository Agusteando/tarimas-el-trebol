export type Product = {
  id: string;
  name: string;
  measure?: string;
  image: string;
  summary: string;
  variants: string[];
  quoteMessage: string;
};

export const products: Product[] = [
  {
    id: 'barrote',
    name: 'Tarima de barrote',
    measure: '1.00 × 1.20 m',
    image: '/images/pallet-barrote.svg',
    summary:
      'Opción industrial para operaciones que necesitan resistencia, disponibilidad y medidas estándar.',
    variants: ['Nueva tratada', 'Usada sin empalme / reciclada', 'De tercera con empalme'],
    quoteMessage: 'Hola, quiero cotizar tarima de barrote 1.00 x 1.20 m para mi empresa.'
  },
  {
    id: 'tacon',
    name: 'Tarima de tacón',
    measure: '1.00 × 1.20 m',
    image: '/images/pallet-tacon.svg',
    summary:
      'Tarima práctica para almacenamiento, movimiento interno y carga de operación industrial.',
    variants: ['Estándar de tercera con empalme', 'Estándar reciclada sin empalmes', 'Estándar nueva'],
    quoteMessage: 'Hola, quiero cotizar tarima de tacón 1.00 x 1.20 m para mi empresa.'
  },
  {
    id: 'cheep',
    name: 'Tarima tipo cheep',
    image: '/images/pallet-cheep.svg',
    summary:
      'Solución flexible para empresas que buscan opciones nuevas o recicladas según su operación.',
    variants: ['Reciclada', 'Nueva'],
    quoteMessage: 'Hola, quiero cotizar tarima tipo cheep para mi empresa.'
  }
];
