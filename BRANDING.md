# Branding inicial — Tarimas El Trébol

## Posicionamiento

Tarimas El Trébol debe comunicar operación industrial, confianza B2B, disponibilidad y respuesta rápida. La marca no debe sentirse como carpintería artesanal ni como recicladora informal. El sitio está orientado a compradores industriales que necesitan claridad, producto, cotización y contacto directo.

Frase guía del landing:

> Tarimas industriales para empresas que no pueden detener su operación.

## Paleta

- Blanco `#FFFFFF`: limpieza, orden, lectura y confianza.
- Verde oscuro `#17452A`: autoridad, estabilidad y presencia industrial.
- Verde principal `#2F7D46`: confianza operativa, CTAs secundarios y marca.
- Verde suave `#EAF5EC`: fondos de secciones, descanso visual y seguridad.
- Amarillo CTA `#F4C542`: acción, cotización y puntos de decisión.
- Amarillo suave `#FFF6D6`: etiquetas y estados positivos.
- Madera `#B87945`: relación material con el producto, usado con moderación.
- Tinta `#1D2A22`: texto principal, más natural que negro puro.

## Tipografía

- Títulos: `Sora`, con fallback a sistema.
- Texto: `Inter`, con fallback a sistema.

Sora aporta un tono técnico e industrial sin verse agresivo. Inter mantiene legibilidad sólida en mobile y desktop.

## Reglas visuales

1. El texto comercial vive en HTML/CSS, no dentro de imágenes.
2. Las imágenes deben mostrar producto, operación, sector o contexto, sin claims ni teléfonos incrustados.
3. El amarillo se reserva para conversión y énfasis, no como fondo dominante.
4. El verde oscuro se usa para autoridad y contraste.
5. El sitio debe sentirse B2B: limpio, directo, ordenado y fácil de cotizar.

## Componentes clave

- CTA principal: “Cotizar por WhatsApp”.
- CTA secundario: “Ver productos” o “Llamar ahora”.
- WhatsApp flotante visible.
- Teléfonos clicables.
- Cards de productos con variantes claras.
- Secciones largas con bloques escaneables.
- Google Maps preparado por variables de entorno.

## Variables de entorno

```env
VITE_PHONE_PRIMARY=7225372605
VITE_PHONE_SECONDARY=7225472591
VITE_WHATSAPP_NUMBER=527225372605
VITE_EMAIL=eltrebol.tarimaindustrial@gmail.com
VITE_MAP_LAT=
VITE_MAP_LNG=
```
