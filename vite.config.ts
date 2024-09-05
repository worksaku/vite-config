import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
  esbuild: {
    treeShaking: true
  }
}));
