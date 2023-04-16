import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/card-game-React/',
  assetsDir: 'public',
  build: {
    outDir: 'gh-pages',
  },
});
