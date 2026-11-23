export const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];
export const DIAS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

const dos = (n) => String(n).padStart(2, '0');

export function iso(fecha) {
  return `${fecha.getFullYear()}-${dos(fecha.getMonth() + 1)}-${dos(fecha.getDate())}`;
}

export function deISO(texto) {
  const [a, m, d] = texto.split('-').map(Number);
  return new Date(a, m - 1, d);
}

export function hoyISO() {
  return iso(new Date());
}

export function sumarDias(texto, n) {
  const f = deISO(texto);
  f.setDate(f.getDate() + n);
  return iso(f);
}

export function legible(texto) {
  if (!texto) return '';
  const f = deISO(texto);
  return `${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`;
}

export function noches(ingreso, salida) {
  if (!ingreso || !salida) return 0;
  return Math.round((deISO(salida) - deISO(ingreso)) / 86400000);
}

// Una noche está ocupada si cae dentro de [inicio, fin) de algún rango.
export function nocheOcupada(texto, ocupadas) {
  return ocupadas.some((r) => texto >= r.inicio && texto < r.fin);
}

export function rangoLibre(ingreso, salida, ocupadas) {
  for (let d = ingreso; d < salida; d = sumarDias(d, 1)) {
    if (nocheOcupada(d, ocupadas)) return false;
  }
  return true;
}
