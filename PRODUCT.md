# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite (pedido por el dueño), desplegado en Vercel. Sitio de frontend; la única pieza de servidor es una función serverless de Vercel que hace de proxy del iCal de Airbnb/Booking (el navegador no puede leerlo directo por CORS).

## Users

Huéspedes de alquiler temporario: parejas o grupos de hasta 3 personas que buscan un departamento en Cabo Corrientes, Mar del Plata. Llegan por una mezcla de canales: Instagram (@fg_departamentos), recomendaciones y plataformas (Airbnb/Booking). Entran para ver cómo es el lugar, confirmar ubicación y reglas, revisar si sus fechas están libres y consultar.

## Product Purpose

Landing de un único departamento en alquiler temporario. Su trabajo es convertir una visita en una consulta directa por WhatsApp con fechas concretas. Éxito: el huésped sabe si sus fechas están libres y manda la consulta sin salir a otra plataforma.

## Positioning

Un solo departamento, gestionado por sus dueños, con trato directo por WhatsApp, a 5 minutos caminando de la playa en Cabo Corrientes (Av. Patricio Peralta Ramos 4283).

## Operating Context

- La consulta se cierra por WhatsApp (+54 9 2235 92-4637). El formulario arma el mensaje y abre wa.me.
- Email de contacto: fgdepartamento@gmail.com.
- La disponibilidad vive en Airbnb/Booking; la web la lee desde el/los link(s) iCal configurados en la variable de entorno `ICAL_URLS` de Vercel.
- Medios de pago: efectivo y Mercado Pago.

## Capabilities and Constraints

- Capacidad: 2 a 3 personas. Dormitorio-comedor, baño completo, cocina equipada, balcón.
- Comodidades: WiFi, Smart TV con Netflix y cable, cocina equipada, aire acondicionado y calefacción.
- Check-in desde las 15:00, check-out hasta las 11:00.
- Sin mascotas, sin fiestas ni eventos, se fuma solo en la terraza/balcón, sin estacionamiento, depósito de garantía reembolsable.
- Cancelación gratuita hasta 4 días antes del ingreso; después se retiene el 50%.
- Distancias declaradas: playa 5 min a pie, restaurantes a menos de 3 min a pie, centro 10 min en auto, terminal 15 min en auto.
- Abierto: link(s) iCal reales de Airbnb/Booking (pendiente del dueño). Precio por noche no publicado.

## Brand Commitments

- Nombre: FG Departamentos. Logo en `img/logo.png`.
- Voz: español rioplatense, cercano y directo (voseo/tuteo según el texto existente).

## Evidence on Hand

- Fotos reales del departamento en `img/` (IMG_3990–3998, vista.jpg).
- Logos de pago: `img/cash.png`, `img/mp.png`.
- No hay reseñas, testimonios, puntaje de plataformas ni precios: no inventarlos.
- Las redes reales son solo Instagram; los íconos de Facebook/Twitter actuales apuntan a Instagram y no deben replicarse.

## Product Principles

1. Una sola acción importa: consultar por WhatsApp con fechas.
2. Mostrar el lugar real con sus fotos antes que adjetivos.
3. Reglas y condiciones claras, sin letra chica.
4. La disponibilidad tiene que ser verdadera o no mostrarse.
