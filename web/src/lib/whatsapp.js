import { contacto } from '../data/depto.js';
import { legible, noches } from './fechas.js';

export function linkWhatsApp({ nombre, ingreso, salida, personas, mensaje } = {}) {
  const lineas = ['Hola, quiero consultar por el departamento de Cabo Corrientes.'];
  if (nombre) lineas.push(`Soy ${nombre}.`);
  if (ingreso && salida) {
    const n = noches(ingreso, salida);
    lineas.push(`Fechas: del ${legible(ingreso)} al ${legible(salida)} (${n} ${n === 1 ? 'noche' : 'noches'}).`);
  }
  if (personas) lineas.push(`Somos ${personas} ${Number(personas) === 1 ? 'persona' : 'personas'}.`);
  if (mensaje) lineas.push(mensaje);
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(lineas.join('\n'))}`;
}
