// Íconos de línea propios, todos con el mismo trazo de 1.6 sobre una grilla de 24.
const trazos = {
  wifi: <><path d="M3 9.5a13 13 0 0 1 18 0" /><path d="M6.5 13a8 8 0 0 1 11 0" /><path d="M10 16.5a3 3 0 0 1 4 0" /><circle cx="12" cy="19.5" r=".6" fill="currentColor" /></>,
  tv: <><rect x="3" y="5" width="18" height="12" /><path d="M8 20h8M12 17v3" /></>,
  cocina: <><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10" /><path d="M16 21V3c-2 1.5-3 4-3 7v3h3" /></>,
  clima: <><path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" /><path d="M9.5 3.5 12 6l2.5-2.5M9.5 20.5 12 18l2.5 2.5" /></>,
  cama: <><path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5" /><circle cx="7" cy="11" r="1.6" /></>,
  balcon: <><path d="M3 12h18M3 21h18M5 12v9M9 12v9M13 12v9M17 12v9M21 12v9" /><path d="M7 12V4h10v8" /></>,
  llave: <><circle cx="8" cy="15" r="4" /><path d="m11 12 9-9M17 6l2 2M15 8l2 2" /></>,
  mascota: <><circle cx="12" cy="12" r="9" /><path d="m5.6 5.6 12.8 12.8" /><circle cx="9.5" cy="10" r="1" /><circle cx="14.5" cy="10" r="1" /><path d="M10 15c1-1 3-1 4 0" /></>,
  fiesta: <><circle cx="12" cy="12" r="9" /><path d="m5.6 5.6 12.8 12.8" /><path d="M9 16V9l6-1.5V14" /><circle cx="8" cy="16" r="1.2" /><circle cx="14" cy="14.5" r="1.2" /></>,
  humo: <><path d="M3 15h14v3H3zM19 15v3M21.5 15v3" /><path d="M18 11c0-2 2-2 2-4" /></>,
  auto: <><circle cx="12" cy="12" r="9" /><path d="m5.6 5.6 12.8 12.8" /><path d="M7 14.5h10M8 14.5l1.2-3.5h5.6l1.2 3.5" /></>,
  billete: <><rect x="2.5" y="6" width="19" height="12" /><circle cx="12" cy="12" r="2.6" /><path d="M6 9.5v5M18 9.5v5" /></>,
  deposito: <><rect x="3" y="7" width="18" height="12" /><path d="M3 11h18M7 15h4" /></>,
  personas: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" /><path d="M16 5.5a3 3 0 0 1 0 5.5M18 14.5c2 .8 3 2.8 3 5.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" /><path d="m3 6 9 7 9-7" /></>,
  telefono: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" /></>,
  izquierda: <path d="M15 5 8 12l7 7" />,
  derecha: <path d="m9 5 7 7-7 7" />,
  cerrar: <path d="M5 5l14 14M19 5 5 19" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  mas: <path d="M12 5v14M5 12h14" />,
  externo: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 14v6H4V6h6" /></>,
};

export default function Icono({ nombre, tam = 22, className, titulo }) {
  return (
    <svg
      className={className}
      width={tam}
      height={tam}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={titulo ? undefined : true}
      role={titulo ? 'img' : undefined}
    >
      {titulo && <title>{titulo}</title>}
      {trazos[nombre]}
    </svg>
  );
}

// Logo de WhatsApp relleno (marca del servicio que usamos para consultar).
export function IconoWhatsApp({ tam = 20 }) {
  return (
    <svg width={tam} height={tam} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
