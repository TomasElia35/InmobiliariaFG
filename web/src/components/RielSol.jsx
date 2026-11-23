import { useEffect, useRef } from 'react';

// Riel fijo a la derecha: el sol sube y la hora avanza a medida que se baja por la página.
const INICIO = 5 * 60 + 52; // 05:52, salida del sol en verano
const FIN = 9 * 60 + 30; // 09:30

const hora = (min) => `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(Math.round(min % 60)).padStart(2, '0')}`;

export default function RielSol() {
  const riel = useRef(null);

  useEffect(() => {
    const el = riel.current;
    let cuadro = 0;
    const actualizar = () => {
      cuadro = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      el.style.setProperty('--p', p.toFixed(4));
      el.dataset.claro = p > 0.42 ? 'si' : 'no';
      el.querySelector('.riel-hora').textContent = hora(INICIO + (FIN - INICIO) * p);
    };
    const pedir = () => {
      if (!cuadro) cuadro = requestAnimationFrame(actualizar);
    };
    actualizar();
    addEventListener('scroll', pedir, { passive: true });
    addEventListener('resize', pedir);
    return () => {
      removeEventListener('scroll', pedir);
      removeEventListener('resize', pedir);
      cancelAnimationFrame(cuadro);
    };
  }, []);

  return (
    <div className="riel" ref={riel} aria-hidden="true">
      <div className="riel-linea" />
      <div className="riel-sol">
        <span className="riel-disco" />
        <span className="riel-hora">05:52</span>
      </div>
    </div>
  );
}
