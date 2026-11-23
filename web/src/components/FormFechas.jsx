import { useId } from 'react';
import { capacidadMax } from '../data/depto.js';
import { hoyISO, noches, rangoLibre, sumarDias } from '../lib/fechas.js';
import { linkWhatsApp } from '../lib/whatsapp.js';
import Icono, { IconoWhatsApp } from './Icono.jsx';

function Estado({ consulta, disponibilidad }) {
  const { ingreso, salida } = consulta;
  if (ingreso && salida && salida <= ingreso) {
    return <p className="estado estado-error" role="alert">La salida tiene que ser después del ingreso.</p>;
  }
  if (disponibilidad.estado === 'cargando') return <p className="estado">Revisando el calendario…</p>;
  if (disponibilidad.estado === 'sin-conectar') {
    return <p className="estado">Te confirmamos la disponibilidad por WhatsApp.</p>;
  }
  if (disponibilidad.estado === 'error') {
    return <p className="estado">No pudimos leer el calendario. Te confirmamos la disponibilidad por WhatsApp.</p>;
  }
  if (!ingreso || !salida) return <p className="estado">Elegí las fechas para ver si están libres.</p>;
  const n = noches(ingreso, salida);
  return rangoLibre(ingreso, salida, disponibilidad.ocupadas) ? (
    <p className="estado estado-libre" role="status">
      {n} {n === 1 ? 'noche libre' : 'noches libres'} según nuestro calendario.
    </p>
  ) : (
    <p className="estado estado-ocupado" role="status">
      Hay noches ocupadas en esas fechas. Probá otras o escribinos igual.
    </p>
  );
}

export default function FormFechas({ consulta, setConsulta, disponibilidad, completo = false, enLinea = false }) {
  const id = useId();
  const hoy = hoyISO();
  const cambiar = (campo) => (e) => setConsulta((c) => ({ ...c, [campo]: e.target.value }));
  const invalido = consulta.ingreso && consulta.salida && consulta.salida <= consulta.ingreso;

  return (
    <form
      className={`form-fechas ${completo ? 'es-completo' : ''} ${enLinea ? 'es-en-linea' : ''}`}
      onSubmit={(e) => {
        e.preventDefault();
        if (!invalido) window.open(linkWhatsApp(consulta), '_blank', 'noopener');
      }}
    >
      {completo && (
        <label className="campo campo-ancho">
          <span>Nombre</span>
          <input
            type="text"
            autoComplete="name"
            value={consulta.nombre}
            onChange={cambiar('nombre')}
            placeholder="Cómo te llamás"
          />
        </label>
      )}
      <label className="campo">
        <span>Ingreso</span>
        <input
          type="date"
          className={consulta.ingreso ? undefined : 'es-vacio'}
          min={hoy}
          value={consulta.ingreso}
          onChange={(e) => {
            const ingreso = e.target.value;
            setConsulta((c) => ({
              ...c,
              ingreso,
              salida: c.salida && c.salida > ingreso ? c.salida : ingreso ? sumarDias(ingreso, 2) : c.salida,
            }));
          }}
          aria-describedby={`${id}-estado`}
        />
      </label>
      <label className="campo">
        <span>Salida</span>
        <input
          type="date"
          className={consulta.salida ? undefined : 'es-vacio'}
          min={consulta.ingreso ? sumarDias(consulta.ingreso, 1) : hoy}
          value={consulta.salida}
          onChange={cambiar('salida')}
          aria-invalid={invalido || undefined}
          aria-describedby={`${id}-estado`}
        />
      </label>
      <label className="campo campo-personas">
        <span>Personas</span>
        <select value={consulta.personas} onChange={cambiar('personas')}>
          {Array.from({ length: capacidadMax }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <Icono nombre="personas" tam={18} className="campo-icono" />
      </label>
      {completo && (
        <label className="campo campo-ancho">
          <span>Mensaje (opcional)</span>
          <textarea
            rows={3}
            value={consulta.mensaje}
            onChange={cambiar('mensaje')}
            placeholder="Contanos lo que necesites saber"
          />
        </label>
      )}
      <div id={`${id}-estado`} className="campo-ancho" aria-live="polite">
        <Estado consulta={consulta} disponibilidad={disponibilidad} />
      </div>
      <button type="submit" className="boton-consultar campo-ancho" disabled={invalido}>
        <IconoWhatsApp />
        Consultar por WhatsApp
      </button>
    </form>
  );
}
