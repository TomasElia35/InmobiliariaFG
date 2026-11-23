import { useState } from 'react';
import Navegacion from './components/Navegacion.jsx';
import Inicio from './components/Inicio.jsx';
import Vistas from './components/Vistas.jsx';
import Depto from './components/Depto.jsx';
import Ubicacion from './components/Ubicacion.jsx';
import Disponibilidad from './components/Disponibilidad.jsx';
import { BotonFlotante, Consultar, Pie, Preguntas } from './components/Cierre.jsx';
import RielSol from './components/RielSol.jsx';
import { useDisponibilidad } from './lib/useDisponibilidad.js';

export default function App() {
  // Las fechas son una sola consulta compartida: la carta, el calendario y el formulario final.
  const [consulta, setConsulta] = useState({ nombre: '', ingreso: '', salida: '', personas: '2', mensaje: '' });
  const disponibilidad = useDisponibilidad();
  const props = { consulta, setConsulta, disponibilidad };

  return (
    <>
      <a href="#contenido" className="saltar">Saltar al contenido</a>
      <Navegacion conectado={disponibilidad.estado === 'listo'} />
      <main id="contenido">
        <Inicio {...props} />
        <Vistas />
        <Depto />
        <Ubicacion />
        <Disponibilidad {...props} />
        <Preguntas />
        <Consultar {...props} />
      </main>
      <Pie />
      <BotonFlotante />
      <RielSol />
    </>
  );
}
