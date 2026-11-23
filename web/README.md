# FG Departamentos · web en React

Nueva versión de la web, hecha con React + Vite. La web anterior (`../index.html`) queda intacta.

## Probarla en tu compu

```powershell
cd web
npm install
npm run dev
```

Abrí http://localhost:5173.

## Editar contenido

Todo el texto, las fotos, las reglas, las distancias y las preguntas están en `src/data/depto.js`.

Para agregar o cambiar fotos: poné el original en `../img/`, sumalo a la lista `fotos` de `depto.js` y corré:

```powershell
npm run images
```

## Calendario de Airbnb / Booking

La sección de disponibilidad lee los calendarios iCal mediante la función `api/disponibilidad.js`.

1. Copiá el link de exportación iCal de Airbnb y/o Booking.
2. Para probar en tu compu: creá `web/.env.local` con `ICAL_URLS=link1,link2` (ver `.env.example`).
3. En Vercel: Settings > Environment Variables > `ICAL_URLS`.

Sin esa variable, la web funciona igual y avisa que la disponibilidad se confirma por WhatsApp.

> `npm run dev` sirve `/api/disponibilidad` con un middleware de Vite. En Vercel la sirve la función serverless.

## Publicar en Vercel (cuando lo decidas)

- Root Directory: `web`
- Framework preset: Vite (build `npm run build`, salida `dist`)
- Variable de entorno: `ICAL_URLS`
