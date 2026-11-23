// Lee calendarios iCal (Airbnb, Booking) y devuelve los rangos ocupados.
// Lo usan la función de Vercel (api/disponibilidad.js) y el servidor de desarrollo.

function aISO(valor) {
  // Acepta 20261201 o 20261201T140000Z y devuelve 2026-12-01
  const m = /^(\d{4})(\d{2})(\d{2})/.exec(valor.trim());
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

export function parsearICal(texto) {
  // Las líneas largas de iCal se "doblan" empezando la siguiente con espacio.
  const lineas = texto.replace(/\r\n[ \t]/g, '').split(/\r?\n/);
  const rangos = [];
  let actual = null;
  for (const linea of lineas) {
    if (linea === 'BEGIN:VEVENT') actual = {};
    else if (linea === 'END:VEVENT') {
      if (actual?.inicio && actual?.fin) rangos.push(actual);
      actual = null;
    } else if (actual) {
      const [clave, ...resto] = linea.split(':');
      const valor = resto.join(':');
      if (clave.startsWith('DTSTART')) actual.inicio = aISO(valor);
      if (clave.startsWith('DTEND')) actual.fin = aISO(valor);
    }
  }
  return rangos;
}

export async function leerDisponibilidad(urls) {
  const lista = (urls || '')
    .split(/[\s,]+/)
    .map((u) => u.trim())
    .filter(Boolean);
  if (lista.length === 0) return { configurado: false, ocupadas: [] };

  const resultados = await Promise.all(
    lista.map(async (url) => {
      const r = await fetch(url, { headers: { 'User-Agent': 'fg-departamentos-calendario' } });
      if (!r.ok) throw new Error(`El calendario respondió ${r.status}`);
      return parsearICal(await r.text());
    }),
  );

  const hoy = new Date().toISOString().slice(0, 10);
  const ocupadas = resultados
    .flat()
    .filter((r) => r.fin > hoy)
    .sort((a, b) => a.inicio.localeCompare(b.inicio));

  return { configurado: true, ocupadas, actualizado: new Date().toISOString() };
}
