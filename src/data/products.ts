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

const imageBase = '/images/products';

export const allProducts: Product[] = [
  {
    id: 'barrote',
    name: 'Tarima Barrote',
    measure: '1.00 × 1.20 m',
    image: `${imageBase}/tarima-barrote.webp`,
    summary: 'La opción más resistente para cargas pesadas y uso rudo en la industria.',
    variants: ['Nueva tratada', 'Usada sin empalme / reciclada', 'De tercera con empalme'],
    highlights: ['Alta resistencia', 'Uso rudo', 'Reutilizable'],
    quoteMessage: 'Hola, quiero cotizar tarima de barrote para mi empresa.'
  },
  {
    id: 'tacon',
    name: 'Tarima Tacón',
    measure: '1.00 × 1.20 m',
    image: `${imageBase}/tarima-tacon.webp`,
    summary: 'Mayor estabilidad y soporte para almacenamiento y transporte seguro.',
    variants: ['Estándar de tercera con empalme', 'Estándar reciclada sin empalmes', 'Estándar nueva'],
    highlights: ['Estabilidad', 'Apilable', 'Duradera'],
    quoteMessage: 'Hola, quiero cotizar tarima de tacón para mi empresa.'
  },
  {
    id: 'tipo-chep',
    name: 'Tarima Tipo Cheep',
    image: `${imageBase}/tarima-tipo-chep.webp`,
    summary: 'Ligera y práctica para exportación, almacenaje y un solo uso.',
    variants: ['Reciclada', 'Nueva'],
    highlights: ['Ligera', 'Económica', 'Exportación'],
    quoteMessage: 'Hola, quiero cotizar tarima tipo cheep para mi empresa.'
  },
  {
    id: 'reciclada',
    name: 'Tarima Reciclada',
    image: `${imageBase}/tarima-reciclada.webp`,
    summary: 'Alternativa funcional para reducir costos sin perder desempeño en operaciones de carga y almacén.',
    variants: ['Sin empalmes', 'Con reparación', 'Por volumen'],
    highlights: ['Costo eficiente', 'Sostenible', 'Operativa'],
    quoteMessage: 'Hola, quiero cotizar tarima reciclada para mi empresa.'
  },
  {
    id: 'nueva-estandar',
    name: 'Tarima Nueva Estándar',
    image: `${imageBase}/tarima-nueva-estandar.webp`,
    summary: 'Tarima nueva para empresas que requieren presentación limpia, resistencia uniforme y suministro constante.',
    variants: ['Medidas estándar', 'Tratamiento bajo solicitud', 'Volumen industrial'],
    highlights: ['Nueva', 'Uniforme', 'Lista para uso'],
    quoteMessage: 'Hola, quiero cotizar tarima nueva estándar para mi empresa.'
  },
  {
    id: 'personalizada',
    name: 'Tarima Personalizada',
    image: `${imageBase}/tarima-personalizada.webp`,
    summary: 'Solución fabricada de acuerdo con medida, capacidad, tipo de carga y condiciones de operación.',
    variants: ['Medida especial', 'Capacidad definida', 'Diseño por aplicación'],
    highlights: ['A medida', 'B2B', 'Flexible'],
    quoteMessage: 'Hola, quiero cotizar una tarima personalizada para mi empresa.'
  },
  {
    id: 'reforzada-carga-pesada',
    name: 'Tarima Reforzada para Carga Pesada',
    image: `${imageBase}/tarima-reforzada-carga-pesada.webp`,
    summary: 'Diseñada para soportar cargas exigentes, movimientos frecuentes y entornos industriales de alto desgaste.',
    variants: ['Refuerzo estructural', 'Uso rudo', 'Capacidad bajo solicitud'],
    highlights: ['Carga pesada', 'Reforzada', 'Industrial'],
    quoteMessage: 'Hola, quiero cotizar tarima reforzada para carga pesada.'
  },
  {
    id: 'doble-vista',
    name: 'Tarima Doble Vista',
    image: `${imageBase}/tarima-doble-vista.webp`,
    summary: 'Diseño con superficie útil por ambos lados para mayor estabilidad y uso repetido en almacén.',
    variants: ['Uso reversible', 'Medidas estándar', 'Fabricación especial'],
    highlights: ['Reversible', 'Estable', 'Reutilizable'],
    quoteMessage: 'Hola, quiero cotizar tarima doble vista para mi empresa.'
  },
  {
    id: 'exportacion',
    name: 'Tarima de Exportación',
    image: `${imageBase}/tarima-exportacion.webp`,
    summary: 'Formato pensado para preparación de embarques, control logístico y movimiento de mercancía fuera de planta.',
    variants: ['Ligera', 'Tratada bajo solicitud', 'Por lote'],
    highlights: ['Exportación', 'Embarque', 'Logística'],
    quoteMessage: 'Hola, quiero cotizar tarima de exportación para mi empresa.'
  },
  {
    id: 'ligera-economica',
    name: 'Tarima Ligera Económica',
    image: `${imageBase}/tarima-ligera-economica.webp`,
    summary: 'Opción práctica para cargas ligeras, movimientos de bajo costo y aplicaciones de un solo uso.',
    variants: ['Carga ligera', 'Uso temporal', 'Volumen alto'],
    highlights: ['Ligera', 'Económica', 'Ágil'],
    quoteMessage: 'Hola, quiero cotizar tarima ligera económica para mi empresa.'
  },
  {
    id: 'industrial-cerrada',
    name: 'Tarima Industrial Cerrada',
    image: `${imageBase}/tarima-industrial-cerrada.webp`,
    summary: 'Superficie cerrada para mejor apoyo de mercancía, cajas o materiales que requieren base continua.',
    variants: ['Cubierta cerrada', 'Medida especial', 'Carga uniforme'],
    highlights: ['Base continua', 'Segura', 'Industrial'],
    quoteMessage: 'Hola, quiero cotizar tarima industrial cerrada para mi empresa.'
  },
  {
    id: 'perimetral',
    name: 'Tarima Perimetral',
    image: `${imageBase}/tarima-perimetral.webp`,
    summary: 'Estructura perimetral para mayor soporte, estabilidad y manipulación segura en operación logística.',
    variants: ['Perímetro reforzado', 'Apilable', 'Medida bajo solicitud'],
    highlights: ['Soporte', 'Estabilidad', 'Logística'],
    quoteMessage: 'Hola, quiero cotizar tarima perimetral para mi empresa.'
  }
];

export const featuredProducts = allProducts.slice(0, 3);

export const products = featuredProducts;
