// Función serverless de Vercel: GET /api/disponibilidad
// Configurar en Vercel la variable ICAL_URLS con el/los links iCal de Airbnb y Booking,
// separados por coma.
import { leerDisponibilidad } from '../lib/ical.js';

export default async function handler(req, res) {
  try {
    const datos = await leerDisponibilidad(process.env.ICAL_URLS);
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
    res.status(200).json(datos);
  } catch (error) {
    res.status(502).json({ configurado: true, error: 'No pudimos leer el calendario.', ocupadas: [] });
  }
}
