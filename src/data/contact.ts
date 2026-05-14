const sharedPhoneNumber = import.meta.env.VITE_CONTACT_PHONE || import.meta.env.VITE_WHATSAPP_PHONE || import.meta.env.VITE_PHONE_CALL_NUMBER || '7225472591';
const phoneCallNumber = sharedPhoneNumber;
const whatsappPhone = sharedPhoneNumber;

export const contact = {
  brandName: 'El Trébol',
  legalName: 'MOAN SA de CV',
  domain: 'tarimaseltrebol.mx',
  phoneCallNumber,
  whatsappPhone,
  phonePrimary: phoneCallNumber,
  phoneSecondary: whatsappPhone,
  footerPhoneNumbers: [phoneCallNumber, '7226706686', '5635028358'],
  email: import.meta.env.VITE_EMAIL || 'ventas@eltreboltarimas.com.mx',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || `52${whatsappPhone}`,
  defaultWhatsappMessage:
    'Hola, quiero solicitar una cotización de tarimas industriales para mi empresa.',
  mapLat: import.meta.env.VITE_MAP_LAT || '19.2985595',
  mapLng: import.meta.env.VITE_MAP_LNG || '-99.6898324',
  mapZoom: Number(import.meta.env.VITE_MAP_ZOOM || 13),
  googleMapsLink: import.meta.env.VITE_GOOGLE_MAPS_LINK || 'https://maps.app.goo.gl/CaAWkfqQoaVnfPph8',
  openStreetMapTileUrl:
    import.meta.env.VITE_OPENSTREETMAP_TILE_URL || 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  openStreetMapAttribution:
    import.meta.env.VITE_OPENSTREETMAP_ATTRIBUTION ||
    '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noreferrer">CARTO</a>',
  addressLine1: import.meta.env.VITE_ADDRESS_LINE_1 || 'Parque Industrial Toluca 2000',
  addressLine2: import.meta.env.VITE_ADDRESS_LINE_2 || 'Toluca, Estado de México, 50200',
  facebookUrl: import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/'
};

export const formatPhone = (phone: string) =>
  phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

export const getWhatsAppLink = (message = contact.defaultWhatsappMessage) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
