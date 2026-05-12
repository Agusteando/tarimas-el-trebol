# Tarimas El Trébol - Landing Page

Proyecto Vue 3 + Vite para `tarimaseltrebol.mx`.

La landing está preparada para compradores B2B de tarimas industriales. Todo el texto principal está renderizado con HTML/CSS, no incrustado dentro de imágenes, para conservar legibilidad, SEO y comportamiento responsive en mobile y desktop.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Configuración

Copia `.env.example` a `.env` y ajusta los valores:

```bash
cp .env.example .env
```

Para Google Maps, cuando tengas la ubicación exacta, llena:

```bash
VITE_MAP_LAT=19.000000
VITE_MAP_LNG=-99.000000
```

El componente del mapa usa un iframe de Google Maps con coordenadas. No requiere API key para este render básico.

## Estructura

```text
src/
  components/         Secciones del landing y componentes reutilizables
  composables/        Utilidades de interacción
  data/               Contenido editable del sitio
  styles/             Tokens y CSS base
public/images/        Visuales temporales sin texto incrustado
```

## Imágenes

Las imágenes incluidas son placeholders SVG sin texto incrustado. El copy, CTAs, títulos y etiquetas se sobreponen desde Vue/HTML para que la página sea responsive y fácil de mantener. Cuando se aprueben imágenes finales, se pueden reemplazar los archivos en `public/images/` manteniendo los mismos nombres o actualizando las rutas en `src/data/`.

## Contacto usado

- Teléfono: 722 537 2605
- Teléfono secundario: 722 547 2591
- Email: eltrebol.tarimaindustrial@gmail.com
- Dominio: tarimaseltrebol.mx
