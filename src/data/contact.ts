export const contact = {
  brandName: 'El Trébol',
  legalName: 'MOAN SA de CV',
  domain: 'tarimaseltrebol.mx',
  phonePrimary: import.meta.env.VITE_PHONE_PRIMARY || '7225372605',
  phoneSecondary: import.meta.env.VITE_PHONE_SECONDARY || '7225472591',
  email: import.meta.env.VITE_EMAIL || 'eltrebol.tarimaindustrial@gmail.com',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '527225372605',
  defaultWhatsappMessage:
    'Hola, quiero solicitar una cotización de tarimas industriales para mi empresa.',
  mapLat: import.meta.env.VITE_MAP_LAT || '',
  mapLng: import.meta.env.VITE_MAP_LNG || ''
};

export const formatPhone = (phone: string) =>
  phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

export const getWhatsAppLink = (message = contact.defaultWhatsappMessage) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
