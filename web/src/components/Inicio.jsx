import FormFechas from './FormFechas.jsx';

export default function Inicio({ consulta, setConsulta, disponibilidad }) {
  return (
    <section id="inicio" className="inicio">
      <div className="inicio-cuerpo">
        <div className="inicio-texto">
          <h1>Despertate frente al mar en Cabo Corrientes</h1>
          <p className="inicio-bajada">
            Departamento para 2 o 3 personas a 5 minutos de la playa. Lo alquilan sus dueños y se consulta directo por
            WhatsApp.
          </p>
        </div>
        <figure className="inicio-foto">
          <img
            src="/img/IMG_3998-800.webp"
            srcSet="/img/IMG_3998-800.webp 800w, /img/IMG_3998-1600.webp 1600w"
            sizes="(max-width: 900px) 100vw, 34vw"
            width="800"
            height="800"
            alt="Amanecer sobre el mar visto desde la avenida costanera, con palmeras y la vereda"
            fetchpriority="high"
          />
          <figcaption>Amanecer en la costanera, a metros del edificio</figcaption>
        </figure>
      </div>

      <div className="horizonte" aria-hidden="true" />
      <div className="reflejo" aria-hidden="true" />

      <div className="franja-consulta">
        <h2 className="solo-lectores">Consultá tus fechas</h2>
        <FormFechas consulta={consulta} setConsulta={setConsulta} disponibilidad={disponibilidad} enLinea />
      </div>
    </section>
  );
}
