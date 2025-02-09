import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // This makes the server listen on all addresses (0.0.0.0)
    port: 5173, // Optional: explicitly set the port if desired
  },
});
