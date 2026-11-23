import { useEffect, useState } from 'react';

// estado: 'cargando' | 'listo' | 'sin-conectar' | 'error'
export function useDisponibilidad() {
  const [datos, setDatos] = useState({ estado: 'cargando', ocupadas: [] });

  useEffect(() => {
    let vivo = true;
    fetch('/api/disponibilidad')
      .then((r) => r.json())
      .then((j) => {
        if (!vivo) return;
        if (j.error) setDatos({ estado: 'error', ocupadas: [] });
        else if (!j.configurado) setDatos({ estado: 'sin-conectar', ocupadas: [] });
        else setDatos({ estado: 'listo', ocupadas: j.ocupadas, actualizado: j.actualizado });
      })
      .catch(() => vivo && setDatos({ estado: 'error', ocupadas: [] }));
    return () => {
      vivo = false;
    };
  }, []);

  return datos;
}
