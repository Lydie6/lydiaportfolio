import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Optional: If you're running in WSL2 or facing DNS issues
import dns from 'node:dns';
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  base: '/',
  plugins: [react()]
});