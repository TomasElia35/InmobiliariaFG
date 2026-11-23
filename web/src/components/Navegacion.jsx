import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Icono from './Icono.jsx';

const enlacesPara = (conectado) => [
  { href: '#vistas', texto: 'Fotos' },
  { href: '#depto', texto: 'El depto' },
  { href: '#ubicacion', texto: 'Ubicación' },
  { href: '#disponibilidad', texto: conectado ? 'Disponibilidad' : 'Fechas' },
  { href: '#preguntas', texto: 'Preguntas' },
];

// Qué sección está en pantalla: la que cruza la franja superior del viewport.
function useSeccionActiva(ids) {
  const [activa, setActiva] = useState(null);
  useEffect(() => {
    const visibles = new Map();
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => visibles.set(e.target.id, e.isIntersecting));
        setActiva(ids.find((id) => visibles.get(id)) ?? null);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids.join()]);
  return activa;
}

export default function Navegacion({ conectado = false }) {
  const enlaces = enlacesPara(conectado);
  const [abierto, setAbierto] = useState(false);
  const [compacta, setCompacta] = useState(false);
  const [marca, setMarca] = useState(null);
  const lista = useRef(null);
  const activa = useSeccionActiva([...enlaces.map((e) => e.href.slice(1)), 'consultar']);

  useEffect(() => {
    const alBajar = () => setCompacta(scrollY > 40);
    alBajar();
    addEventListener('scroll', alBajar, { passive: true });
    return () => removeEventListener('scroll', alBajar);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const cerrar = (e) => e.key === 'Escape' && setAbierto(false);
    addEventListener('keydown', cerrar);
    return () => removeEventListener('keydown', cerrar);
  }, [abierto]);

  // El resaltado se desliza hasta el enlace de la sección activa.
  useLayoutEffect(() => {
    const medir = () => {
      const a = lista.current?.querySelector(`a[href="#${activa}"]:not(.nav-consultar)`);
      setMarca(a && a.offsetParent ? { x: a.offsetLeft, w: a.offsetWidth } : null);
    };
    medir();
    addEventListener('resize', medir);
    return () => removeEventListener('resize', medir);
  }, [activa, compacta, conectado]);

  return (
    <header className={`nav ${compacta ? 'es-compacta' : ''} ${abierto ? 'es-abierta' : ''}`}>
      <a href="#inicio" className="nav-marca" aria-label="FG Departamentos, ir al inicio">
        <svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true" className="nav-marca-signo">
          <path d="M5 14a8 8 0 0 1 16 0Z" />
          <path d="M0 15.5h26" />
        </svg>
        FG Departamentos
      </a>
      <button
        className="nav-boton"
        aria-expanded={abierto}
        aria-controls="nav-lista"
        onClick={() => setAbierto((a) => !a)}
      >
        <Icono nombre={abierto ? 'cerrar' : 'menu'} />
        <span className="solo-lectores">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
      </button>
      <nav
        id="nav-lista"
        ref={lista}
        className={`nav-lista ${abierto ? 'es-abierto' : ''}`}
        aria-label="Secciones"
      >
        <span
          className="nav-indicador"
          aria-hidden="true"
          style={marca ? { transform: `translateX(${marca.x}px)`, width: marca.w, opacity: 1 } : { opacity: 0 }}
        />
        {enlaces.map((e) => (
          <a
            key={e.href}
            href={e.href}
            aria-current={activa === e.href.slice(1) ? 'location' : undefined}
            onClick={() => setAbierto(false)}
          >
            {e.texto}
          </a>
        ))}
        <a href="#consultar" className="nav-consultar" onClick={() => setAbierto(false)}>
          Consultar
        </a>
      </nav>
    </header>
  );
}
