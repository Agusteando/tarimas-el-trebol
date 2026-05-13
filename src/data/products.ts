export type Product = {
  id: string;
  name: string;
  measure?: string;
  image: string;
  summary: string;
  variants: string[];
  highlights: string[];
  quoteMessage: string;
  sheetMessage: string;
};

const imageBase = '/images/products';

const firstVariantDescription = 'Primera calidad fabricada con madera nueva, indicada para operaciones que requieren mayor presentación, resistencia uniforme y continuidad de suministro.';
const secondVariantDescription = 'Segunda calidad elaborada con tarima reciclada revisada, ideal para optimizar costo sin perder funcionalidad en manejo, almacenaje y transporte.';
const thirdVariantDescription = 'Tercera calidad con empalmes, pensada para operaciones de uso práctico donde se busca una alternativa económica y funcional.';

export const allProducts: Product[] = [
  {
    id: 'tacon-primera',
    name: 'Tarima Tacón Primera',
    measure: 'Variante nueva',
    image: `${imageBase}/tarima-tacon.webp`,
    summary: `Tarima de tacón de primera calidad. ${firstVariantDescription}`,
    variants: ['Primera', 'Nueva', 'Tacón'],
    highlights: ['Madera nueva', 'Estable', 'Apta para volumen'],
    quoteMessage: 'Hola, quiero cotizar tarima tacón primera nueva.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima tacón primera nueva.'
  },
  {
    id: 'tacon-segunda',
    name: 'Tarima Tacón Segunda',
    measure: 'Tarima reciclada',
    image: `${imageBase}/tarima-tacon.webp`,
    summary: `Tarima de tacón de segunda calidad. ${secondVariantDescription}`,
    variants: ['Segunda', 'Reciclada', 'Tacón'],
    highlights: ['Costo eficiente', 'Revisada', 'Operativa'],
    quoteMessage: 'Hola, quiero cotizar tarima tacón segunda reciclada.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima tacón segunda reciclada.'
  },
  {
    id: 'tacon-tercera',
    name: 'Tarima Tacón Tercera',
    measure: 'Tarima con empalmes',
    image: `${imageBase}/tarima-tacon.webp`,
    summary: `Tarima de tacón de tercera calidad. ${thirdVariantDescription}`,
    variants: ['Tercera', 'Con empalmes', 'Tacón'],
    highlights: ['Económica', 'Funcional', 'Uso práctico'],
    quoteMessage: 'Hola, quiero cotizar tarima tacón tercera con empalmes.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima tacón tercera con empalmes.'
  },
  {
    id: 'barrote-primera',
    name: 'Tarima Barrote Primera',
    measure: 'Variante nueva',
    image: `${imageBase}/tarima-barrote.webp`,
    summary: `Tarima de barrote de primera calidad. ${firstVariantDescription}`,
    variants: ['Primera', 'Nueva', 'Barrote'],
    highlights: ['Alta resistencia', 'Madera nueva', 'Uso industrial'],
    quoteMessage: 'Hola, quiero cotizar tarima barrote primera nueva.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima barrote primera nueva.'
  },
  {
    id: 'barrote-segunda',
    name: 'Tarima Barrote Segunda',
    measure: 'Tarima reciclada',
    image: `${imageBase}/tarima-barrote.webp`,
    summary: `Tarima de barrote de segunda calidad. ${secondVariantDescription}`,
    variants: ['Segunda', 'Reciclada', 'Barrote'],
    highlights: ['Resistente', 'Reciclada', 'Costo eficiente'],
    quoteMessage: 'Hola, quiero cotizar tarima barrote segunda reciclada.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima barrote segunda reciclada.'
  },
  {
    id: 'barrote-tercera',
    name: 'Tarima Barrote Tercera',
    measure: 'Tarima con empalmes',
    image: `${imageBase}/tarima-barrote.webp`,
    summary: `Tarima de barrote de tercera calidad. ${thirdVariantDescription}`,
    variants: ['Tercera', 'Con empalmes', 'Barrote'],
    highlights: ['Económica', 'Uso rudo', 'Funcional'],
    quoteMessage: 'Hola, quiero cotizar tarima barrote tercera con empalmes.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima barrote tercera con empalmes.'
  },
  {
    id: 'tipo-chep',
    name: 'Tarima Tipo Cheep',
    image: `${imageBase}/tarima-tipo-chep.webp`,
    summary: 'Tarima ligera y práctica para manejo, almacenamiento, distribución y operaciones donde se requiere una base funcional y ágil.',
    variants: ['Tipo Cheep', 'Ligera', 'Operativa'],
    highlights: ['Ligera', 'Práctica', 'Manejo ágil'],
    quoteMessage: 'Hola, quiero cotizar tarima tipo cheep.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima tipo cheep.'
  },
  {
    id: 'hibrida',
    name: 'Tarima Híbrida',
    image: `${imageBase}/tarima-tipo-chep.webp`,
    summary: 'Tarima fabricada con combinación de tablas recicladas y nuevas para equilibrar costo, disponibilidad y desempeño operativo.',
    variants: ['Tablas recicladas', 'Tablas nuevas', 'Mixta'],
    highlights: ['Híbrida', 'Flexible', 'Costo-beneficio'],
    quoteMessage: 'Hola, quiero cotizar tarima híbrida con tablas recicladas y nuevas.',
    sheetMessage: 'Hola, quiero recibir la ficha técnica de la tarima híbrida con tablas recicladas y nuevas.'
  }
];

export const featuredProducts = allProducts;

export const products = featuredProducts;
