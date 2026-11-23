import { useEffect, useState } from 'react';
import { contacto, preguntas } from '../data/depto.js';
import FormFechas from './FormFechas.jsx';
import Icono, { IconoWhatsApp } from './Icono.jsx';

export function Preguntas() {
  return (
    <section id="preguntas" className="seccion preguntas">
      <div className="seccion-cabeza">
        <h2>Preguntas frecuentes</h2>
      </div>
      <div className="preguntas-lista">
        {preguntas.map((p) => (
          <details key={p.q}>
            <summary>
              {p.q}
              <Icono nombre="mas" tam={20} className="preguntas-signo" />
            </summary>
            <p>{p.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Consultar({ consulta, setConsulta, disponibilidad }) {
  return (
    <section id="consultar" className="seccion consultar">
      <div className="consultar-texto">
        <h2>Escribinos y te respondemos nosotros</h2>
        <p>
          Completá lo que quieras y se abre WhatsApp con el mensaje listo para enviar. Si preferís, escribinos
          directamente.
        </p>
        <ul className="contactos">
          <li>
            <a href={`https://wa.me/${contacto.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <IconoWhatsApp tam={22} />
              {contacto.telefonoVisible}
            </a>
          </li>
          <li>
            <a href={`mailto:${contacto.email}`}>
              <Icono nombre="mail" />
              {contacto.email}
            </a>
          </li>
          <li>
            <a href={contacto.instagram} target="_blank" rel="noopener noreferrer">
              <Icono nombre="instagram" />
              {contacto.instagramUsuario}
            </a>
          </li>
        </ul>
        <div className="pagos">
          <p>Medios de pago</p>
          <div className="pagos-logos">
            <span className="pago-efectivo">
              <Icono nombre="billete" tam={26} />
              Efectivo
            </span>
            <img src="/img/mp-240.webp" width="120" height="34" alt="Mercado Pago" />
          </div>
        </div>
      </div>
      <div className="aviso-consulta aviso-consulta-grande">
        <h3>Tu consulta</h3>
        <FormFechas consulta={consulta} setConsulta={setConsulta} disponibilidad={disponibilidad} completo />
      </div>
    </section>
  );
}

export function Pie() {
  return (
    <footer className="pie">
      <div className="pie-fila">
        <p className="pie-marca">
          <svg width="30" height="20" viewBox="0 0 26 18" aria-hidden="true" className="nav-marca-signo">
            <path d="M5 14a8 8 0 0 1 16 0Z" />
            <path d="M0 15.5h26" />
          </svg>
          FG Departamentos
        </p>
        <p>
          {contacto.direccion}, {contacto.ciudad}
        </p>
      </div>
      <p className="pie-legal">© {new Date().getFullYear()} FG Departamentos. Alquiler temporario en Mar del Plata.</p>
    </footer>
  );
}

export function BotonFlotante() {
  // Aparece cuando el formulario del inicio ya no está en pantalla, para no taparlo ni repetirlo.
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const aviso = document.querySelector('.inicio .franja-consulta');
    if (!aviso) return;
    const obs = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting && e.boundingClientRect.top < 0));
    obs.observe(aviso);
    return () => obs.disconnect();
  }, []);
  return (
    <a
      className={`boton-flotante ${visible ? 'es-visible' : ''}`}
      tabIndex={visible ? undefined : -1}
      aria-hidden={visible ? undefined : true}
      href={`https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent('Hola, quiero consultar por el departamento de Cabo Corrientes.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <IconoWhatsApp tam={26} />
    </a>
  );
}
