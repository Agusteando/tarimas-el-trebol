export type MissionBenefit = {
  icon: 'shield' | 'leaf' | 'people';
  title: string;
  text: string;
};

export const missionBenefits: MissionBenefit[] = [
  {
    icon: 'shield',
    title: 'Calidad garantizada',
    text: 'Procesos estandarizados y materiales seleccionados para máxima resistencia.'
  },
  {
    icon: 'leaf',
    title: 'Compromiso sostenible',
    text: 'Reutilizamos y reciclamos para reducir el impacto ambiental.'
  },
  {
    icon: 'people',
    title: 'Atención personalizada',
    text: 'Asesoría cercana y soluciones a la medida de cada operación.'
  }
];
