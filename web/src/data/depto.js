// Todo el contenido real del departamento vive acá.
// Si cambia un dato (teléfono, reglas, fotos), se edita solo este archivo.

export const contacto = {
  whatsapp: '5492235924637',
  telefonoVisible: '+54 9 223 592-4637',
  email: 'fgdepartamento@gmail.com',
  instagram: 'https://www.instagram.com/fg_departamentos/',
  instagramUsuario: '@fg_departamentos',
  direccion: 'Av. Patricio Peralta Ramos 4283',
  ciudad: 'Cabo Corrientes, Mar del Plata',
  mapa:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12573.145102763907!2d-57.536743327074596!3d-38.01710505080232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4bdfcf700d%3A0xe1ad0ca705f4665b!2sAv.%20Patricio%20Peralta%20Ramos%204283%2C%20B7600JWD%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1749332676980!5m2!1ses!2sar',
  mapaLink: 'https://maps.google.com/?q=Av.+Patricio+Peralta+Ramos+4283,+Mar+del+Plata',
};

export const capacidadMax = 3;

export const fotos = [
  {
    id: 'IMG_3991',
    alt: 'Ambiente principal con cama matrimonial, sofá, mesa de madera y puertas vidriadas al balcón',
    caption: 'Dormitorio-comedor',
  },
  {
    id: 'IMG_3990',
    alt: 'Sofá gris con almohadones, mesa ratona de madera y lámpara de pie',
    caption: 'Sector de estar',
  },
  {
    id: 'IMG_3992',
    alt: 'Cama matrimonial frente a la puerta del balcón, con aire acondicionado y televisor en la pared',
    caption: 'Cama, aire acondicionado y Smart TV',
  },
  {
    id: 'IMG_3996',
    alt: 'Placard abierto con cajonera de madera, perchas y una banqueta',
    caption: 'Placard',
  },
  {
    id: 'IMG_3994',
    alt: 'Balcón con baranda blanca y una planta, mirando al patio interno del edificio',
    caption: 'Balcón al patio interno',
  },
  {
    id: 'IMG_3993',
    alt: 'Cocina con anafe y horno a gas, microondas, heladera, pava eléctrica y ventana',
    caption: 'Cocina equipada',
  },
  {
    id: 'IMG_3997',
    alt: 'Hall de entrada del edificio con piso de cerámica y el mar al amanecer detrás de las puertas de vidrio',
    caption: 'El hall del edificio, frente al mar',
  },
];

export const comodidades = [
  { icono: 'wifi', texto: 'WiFi de alta velocidad' },
  { icono: 'tv', texto: 'Smart TV con Netflix y cable' },
  { icono: 'cocina', texto: 'Cocina totalmente equipada' },
  { icono: 'clima', texto: 'Aire acondicionado y calefacción' },
  { icono: 'cama', texto: 'Dormitorio-comedor y baño completo' },
  { icono: 'balcon', texto: 'Balcón' },
];

export const reglas = [
  { icono: 'llave', texto: 'Check-in desde las 15:00. Check-out hasta las 11:00.' },
  { icono: 'mascota', texto: 'No se permiten mascotas.' },
  { icono: 'fiesta', texto: 'No se permiten fiestas ni eventos.' },
  { icono: 'humo', texto: 'Se puede fumar solo en el balcón.' },
  { icono: 'auto', texto: 'No hay estacionamiento.' },
  { icono: 'deposito', texto: 'Se pide un depósito de garantía, que se devuelve.' },
];

// Ordenadas de la más cercana a la más lejana: así se dibujan en la carta.
export const destinos = [
  { id: 'restos', nombre: 'Restaurantes y bares', minutos: 3, modo: 'a pie' },
  { id: 'playa', nombre: 'Playa', minutos: 5, modo: 'a pie' },
  { id: 'centro', nombre: 'Centro', minutos: 10, modo: 'en auto' },
  { id: 'terminal', nombre: 'Terminal de ómnibus', minutos: 15, modo: 'en auto' },
];

export const preguntas = [
  {
    q: '¿Cuál es el horario de check-in y check-out?',
    a: 'El check-in es a partir de las 15:00 y el check-out hasta las 11:00.',
  },
  {
    q: '¿Cuántas personas entran?',
    a: 'El departamento es para 2 o 3 personas: tiene un dormitorio-comedor, baño completo, cocina equipada y balcón.',
  },
  {
    q: '¿Se permiten mascotas?',
    a: 'No se permiten mascotas, para garantizar la comodidad de todos los huéspedes.',
  },
  {
    q: '¿Hay estacionamiento?',
    a: 'No, el departamento no tiene estacionamiento propio.',
  },
  {
    q: '¿El departamento tiene WiFi?',
    a: 'Sí, hay WiFi de alta velocidad sin cargo durante toda la estadía.',
  },
  {
    q: '¿Cuál es la política de cancelación?',
    a: 'La cancelación es gratuita hasta 4 días antes de la fecha de ingreso. Después de ese plazo se retiene el 50% del monto total.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Aceptamos efectivo y Mercado Pago. Además se pide un depósito de garantía que se devuelve al terminar la estadía.',
  },
];
