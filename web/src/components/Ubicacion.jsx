import { contacto, destinos } from '../data/depto.js';
import Icono from './Icono.jsx';

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="seccion ubicacion">
      <div className="ubicacion-texto">
        <h2>Dónde queda</h2>
        <p className="ubicacion-direccion">
          {contacto.direccion}
          <br />
          {contacto.ciudad}
        </p>
        <p>
          Una zona tranquila, cerca de la playa y rodeada de comercios, restaurantes y paseos. Todo lo que necesitás
          para unas vacaciones está a pocas cuadras.
        </p>
        <ol className="distancias">
          {destinos.map((d) => (
            <li key={d.id} style={{ '--min': d.minutos }}>
              <span className="distancia-min">
                {d.minutos}
                <small> min</small>
              </span>
              <span className="distancia-que">
                {d.nombre}
                <em>{d.modo}</em>
              </span>
            </li>
          ))}
        </ol>
        <a className="enlace-flecha" href={contacto.mapaLink} target="_blank" rel="noopener noreferrer">
          Abrir en Google Maps
          <Icono nombre="externo" tam={18} />
        </a>
      </div>
      <div className="ubicacion-mapa">
        <iframe
          src={contacto.mapa}
          title={`Mapa de ${contacto.direccion}, ${contacto.ciudad}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
