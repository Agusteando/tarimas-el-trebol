const phoneCallNumber = import.meta.env.VITE_PHONE_CALL_NUMBER || import.meta.env.VITE_PHONE_PRIMARY || '7225372605';
const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE || import.meta.env.VITE_PHONE_SECONDARY || '7225472591';

export const contact = {
  brandName: 'El Trébol',
  legalName: 'MOAN SA de CV',
  domain: 'tarimaseltrebol.mx',
  phoneCallNumber,
  whatsappPhone,
  phonePrimary: phoneCallNumber,
  phoneSecondary: whatsappPhone,
  email: import.meta.env.VITE_EMAIL || 'eltrebol.tarimaindustrial@gmail.com',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || `52${whatsappPhone}`,
  defaultWhatsappMessage:
    'Hola, quiero solicitar una cotización de tarimas industriales para mi empresa.',
  mapLat: import.meta.env.VITE_MAP_LAT || '19.2985595',
  mapLng: import.meta.env.VITE_MAP_LNG || '-99.6898324',
  mapZoom: Number(import.meta.env.VITE_MAP_ZOOM || 13),
  googleMapsLink: import.meta.env.VITE_GOOGLE_MAPS_LINK || 'https://maps.app.goo.gl/CaAWkfqQoaVnfPph8',
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
};

export const formatPhone = (phone: string) =>
  phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

export const getWhatsAppLink = (message = contact.defaultWhatsappMessage) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
