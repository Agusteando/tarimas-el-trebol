export type AdvantageItem = {
  title: string;
  description: string;
  icon: string;
};

export const advantages: AdvantageItem[] = [
  {
    title: 'Calidad garantizada',
    description:
      'Usamos madera seleccionada y procesos de fabricación que aseguran resistencia y durabilidad.',
    icon: 'award'
  },
  {
    title: 'Entregas confiables',
    description:
      'Cumplimos tiempos y volúmenes acordados, con logística propia y rutas eficientes.',
    icon: 'truck'
  },
  {
    title: 'Atención personalizada',
    description:
      'Te acompañamos en todo el proceso para ofrecerte la mejor solución para tu negocio.',
    icon: 'users'
  },
  {
    title: 'Capacidad productiva',
    description:
      'Contamos con infraestructura y personal capacitado para atender pedidos de cualquier tamaño.',
    icon: 'factory'
  },
  {
    title: 'Compromiso sostenible',
    description:
      'Aprovechamos responsablemente los recursos y promovemos prácticas que cuidan el medio ambiente.',
    icon: 'leaf'
  }
];
