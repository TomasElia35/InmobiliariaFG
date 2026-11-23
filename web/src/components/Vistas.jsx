import { useEffect, useRef, useState } from 'react';
import { fotos } from '../data/depto.js';
import Icono from './Icono.jsx';

const src = (id, w) => `/img/${id}-${w}.webp`;

export default function Vistas() {
  const [abierta, setAbierta] = useState(null);
  const dialogo = useRef(null);

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (abierta !== null && !d.open) d.showModal();
    if (abierta === null && d.open) d.close();
  }, [abierta]);

  const mover = (paso) => setAbierta((i) => (i + paso + fotos.length) % fotos.length);

  return (
    <section id="vistas" className="seccion vistas">
      <div className="seccion-cabeza">
        <h2>Así es por dentro</h2>
        <p>Fotos reales del departamento y del edificio. Tocá una para verla grande.</p>
      </div>
      <ul className="vistas-grilla">
        {fotos.map((f, i) => (
          <li key={f.id} className={`vista vista-${i}`}>
            <button onClick={() => setAbierta(i)} aria-label={`Ver foto grande: ${f.caption}`}>
              <img
                src={src(f.id, 800)}
                srcSet={`${src(f.id, 800)} 800w, ${src(f.id, 1600)} 1600w`}
                sizes={i === 0 ? '(max-width: 700px) 100vw, 50vw' : '(max-width: 700px) 50vw, 25vw'}
                width="800"
                height="800"
                loading="lazy"
                alt={f.alt}
              />
            </button>
            <p className="vista-pie">{f.caption}</p>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogo}
        className="visor"
        onClose={() => setAbierta(null)}
        onClick={(e) => e.target === dialogo.current && setAbierta(null)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') mover(1);
          if (e.key === 'ArrowLeft') mover(-1);
        }}
        aria-label="Visor de fotos"
      >
        {abierta !== null && (
          <figure className="visor-figura">
            <img src={src(fotos[abierta].id, 1600)} alt={fotos[abierta].alt} />
            <figcaption>
              <span>{fotos[abierta].caption}</span>
              <span className="visor-cuenta">
                {abierta + 1} de {fotos.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button className="visor-boton visor-cerrar" onClick={() => setAbierta(null)} aria-label="Cerrar">
          <Icono nombre="cerrar" />
        </button>
        <button className="visor-boton visor-ant" onClick={() => mover(-1)} aria-label="Foto anterior">
          <Icono nombre="izquierda" />
        </button>
        <button className="visor-boton visor-sig" onClick={() => mover(1)} aria-label="Foto siguiente">
          <Icono nombre="derecha" />
        </button>
      </dialog>
    </section>
  );
}
