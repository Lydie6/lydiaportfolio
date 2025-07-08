import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Optional: If you're running in WSL2 or facing DNS issues
import dns from 'node:dns';
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react()],

  // Base URL for deployment (important for Netlify)
  base: '/lydiaportfolio/',

  server: {
    port: 5173,
    host: true,

    // HMR settings to avoid WebSocket connection issues
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
      clientPort: 5173,
      overlay: false,
    },

    // Allow localhost connections (fixes some browser extension errors)
    allowedHosts: ['localhost', '.localhost'],
  },

  // Optional: Set proxy if needed (e.g. for API calls during dev)
  // proxy: {
  //   '/api': 'http://localhost:3000',
  // },
});