export const spriteIconMap = {
  arrow: '/images/icons/sprite/arrow.png',
  award: '/images/icons/sprite/award.png',
  box: '/images/icons/sprite/box.png',
  calendar: '/images/icons/sprite/calendar.png',
  chat: '/images/icons/sprite/chat.png',
  clock: '/images/icons/sprite/clock.png',
  clover: '/images/icons/sprite/clover.png',
  'delivery-clock': '/images/icons/sprite/delivery-clock.png',
  dots: '/images/icons/sprite/dots.png',
  factory: '/images/icons/sprite/factory.png',
  food: '/images/icons/sprite/food.png',
  gear: '/images/icons/sprite/gear.png',
  handshake: '/images/icons/sprite/handshake.png',
  leaf: '/images/icons/sprite/leaf.png',
  measure: '/images/icons/sprite/measure.png',
  metal: '/images/icons/sprite/metal.png',
  pallet: '/images/icons/sprite/pallet.png',
  phone: '/images/icons/sprite/phone.png',
  pin: '/images/icons/sprite/pin.png',
  quote: '/images/icons/sprite/quote.png',
  recycle: '/images/icons/sprite/recycle.png',
  shield: '/images/icons/sprite/shield.png',
  ship: '/images/icons/sprite/ship.png',
  shovel: '/images/icons/sprite/shovel.png',
  users: '/images/icons/sprite/users.png',
  people: '/images/icons/sprite/users.png',
  whatsapp: '/images/icons/brand/whatsapp-brand-dark.png'
} as const;

export type SpriteIconName = keyof typeof spriteIconMap;

export function getSpriteIcon(name: string): string | null {
  return spriteIconMap[name as SpriteIconName] ?? null;
}
