import { comodidades, reglas } from '../data/depto.js';
import Icono from './Icono.jsx';

export default function Depto() {
  return (
    <section id="depto" className="seccion depto">
      <div className="depto-texto">
        <h2>El departamento</h2>
        <p className="depto-intro">
          Un ambiente moderno y cómodo para 2 o 3 personas: dormitorio-comedor, baño completo, cocina equipada y un
          balcón. El edificio está sobre la costanera y desde el hall se ve el mar.
        </p>
        <figure className="depto-foto">
          <img
            src="/img/vista-800.webp"
            width="800"
            height="600"
            loading="lazy"
            alt="La costa de Mar del Plata vista desde arriba: la playa, la rambla y los edificios frente al mar"
          />
          <figcaption>La costa de Cabo Corrientes, a pocas cuadras</figcaption>
        </figure>
      </div>

      <div className="depto-listas">
        <div>
          <h3>Comodidades</h3>
          <ul className="lista-iconos">
            {comodidades.map((c) => (
              <li key={c.texto}>
                <Icono nombre={c.icono} />
                {c.texto}
              </li>
            ))}
          </ul>
        </div>
        <div className="depto-reglas">
          <h3>Reglas de la casa</h3>
          <ul className="lista-iconos">
            {reglas.map((r) => (
              <li key={r.texto}>
                <Icono nombre={r.icono} />
                {r.texto}
              </li>
            ))}
          </ul>
          <p className="depto-cancelacion">
            <strong>Cancelación:</strong> gratis hasta 4 días antes del ingreso. Después se retiene el 50% del total.
          </p>
        </div>
      </div>
    </section>
  );
}
