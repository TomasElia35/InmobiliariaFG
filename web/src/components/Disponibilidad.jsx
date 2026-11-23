import { useState } from 'react';
import { DIAS, MESES, hoyISO, iso, legible, noches, nocheOcupada } from '../lib/fechas.js';
import Icono from './Icono.jsx';

function Mes({ anio, mes, consulta, onElegir, ocupadas, conectado }) {
  const primero = new Date(anio, mes, 1);
  const total = new Date(anio, mes + 1, 0).getDate();
  const vacios = (primero.getDay() + 6) % 7; // semana empieza el lunes
  const hoy = hoyISO();
  const { ingreso, salida } = consulta;

  const celdas = [];
  for (let i = 0; i < vacios; i++) celdas.push(<span key={`v${i}`} aria-hidden="true" />);
  for (let d = 1; d <= total; d++) {
    const dia = iso(new Date(anio, mes, d));
    const pasado = dia < hoy;
    const ocupado = conectado && nocheOcupada(dia, ocupadas);
    const enRango = ingreso && salida && dia >= ingreso && dia <= salida;
    const extremo = dia === ingreso || dia === salida;
    const clases = [
      'dia',
      pasado && 'es-pasado',
      conectado && !pasado && (ocupado ? 'es-ocupado' : 'es-libre'),
      enRango && 'es-rango',
      extremo && 'es-extremo',
      dia === hoy && 'es-hoy',
    ]
      .filter(Boolean)
      .join(' ');
    const estado = pasado ? 'pasado' : !conectado ? '' : ocupado ? 'ocupado' : 'libre';
    celdas.push(
      <button
        key={dia}
        type="button"
        className={clases}
        disabled={pasado}
        aria-pressed={extremo}
        aria-label={`${d} de ${MESES[mes]}${estado ? `, ${estado}` : ''}`}
        onClick={() => onElegir(dia)}
      >
        <span className="dia-num">{d}</span>
      </button>,
    );
  }

  return (
    <div className="mes">
      <h3 className="mes-titulo">
        {MESES[mes]} <span>{anio}</span>
      </h3>
      <div className="mes-dias" aria-hidden="true">
        {DIAS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="mes-grilla">{celdas}</div>
    </div>
  );
}

export default function Disponibilidad({ consulta, setConsulta, disponibilidad }) {
  const ahora = new Date();
  const [desde, setDesde] = useState({ anio: ahora.getFullYear(), mes: ahora.getMonth() });
  const conectado = disponibilidad.estado === 'listo';
  const siguiente = desde.mes === 11 ? { anio: desde.anio + 1, mes: 0 } : { anio: desde.anio, mes: desde.mes + 1 };
  const enInicio = desde.anio === ahora.getFullYear() && desde.mes === ahora.getMonth();

  const mover = (paso) =>
    setDesde(({ anio, mes }) => {
      const f = new Date(anio, mes + paso, 1);
      return { anio: f.getFullYear(), mes: f.getMonth() };
    });

  const elegir = (dia) =>
    setConsulta((c) => {
      if (!c.ingreso || c.salida || dia <= c.ingreso) return { ...c, ingreso: dia, salida: '' };
      return { ...c, salida: dia };
    });

  const n = noches(consulta.ingreso, consulta.salida);

  return (
    <section id="disponibilidad" className="seccion disponibilidad">
      <div className="seccion-cabeza">
        <h2>{conectado ? 'Disponibilidad' : 'Elegí tus fechas'}</h2>
        {disponibilidad.estado === 'listo' && (
          <p>Sincronizada con nuestros calendarios de Airbnb y Booking. Tocá el día de ingreso y después el de salida.</p>
        )}
        {disponibilidad.estado === 'cargando' && <p>Cargando el calendario…</p>}
        {(disponibilidad.estado === 'sin-conectar' || disponibilidad.estado === 'error') && (
          <p>Tocá el día de ingreso y después el de salida. Te confirmamos la disponibilidad por WhatsApp.</p>
        )}
      </div>

      <div className="tabla-meses">
        <div className="tabla-controles">
          <button type="button" onClick={() => mover(-1)} disabled={enInicio} aria-label="Meses anteriores">
            <Icono nombre="izquierda" />
          </button>
          <button type="button" onClick={() => mover(1)} aria-label="Meses siguientes">
            <Icono nombre="derecha" />
          </button>
        </div>
        <Mes {...desde} consulta={consulta} onElegir={elegir} ocupadas={disponibilidad.ocupadas} conectado={conectado} />
        <Mes {...siguiente} consulta={consulta} onElegir={elegir} ocupadas={disponibilidad.ocupadas} conectado={conectado} />
      </div>

      <div className="tabla-pie">
        {conectado && (
          <ul className="leyenda">
            <li><span className="muestra muestra-libre" />Libre</li>
            <li><span className="muestra muestra-ocupado" />Ocupado</li>
            <li><span className="muestra muestra-rango" />Tus fechas</li>
          </ul>
        )}
        <p className="tabla-eleccion" aria-live="polite">
          {consulta.ingreso && consulta.salida
            ? `Del ${legible(consulta.ingreso)} al ${legible(consulta.salida)}: ${n} ${n === 1 ? 'noche' : 'noches'}.`
            : consulta.ingreso
              ? `Ingreso el ${legible(consulta.ingreso)}. Ahora elegí la salida.`
              : 'Todavía no elegiste fechas.'}
          {consulta.ingreso && consulta.salida && (
            <a href="#consultar" className="enlace-flecha">
              Consultar estas fechas
              <Icono nombre="derecha" tam={18} />
            </a>
          )}
        </p>
      </div>
    </section>
  );
}
