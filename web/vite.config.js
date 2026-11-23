import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { leerDisponibilidad } from './lib/ical.js';

// En desarrollo, sirve /api/disponibilidad igual que la función de Vercel.
function apiDisponibilidad(env) {
  return {
    name: 'api-disponibilidad',
    configureServer(server) {
      server.middlewares.use('/api/disponibilidad', async (_req, res) => {
        res.setHeader('Content-Type', 'application/json');
        try {
          res.end(JSON.stringify(await leerDisponibilidad(env.ICAL_URLS)));
        } catch {
          res.statusCode = 502;
          res.end(JSON.stringify({ configurado: true, error: 'No pudimos leer el calendario.', ocupadas: [] }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return { plugins: [react(), apiDisponibilidad(env)] };
});
