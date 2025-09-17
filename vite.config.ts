import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, 'src/@core'),
      '@types': path.resolve(__dirname, 'src/@types'),
      '@demo-react': path.resolve(__dirname, 'src')
    }
  }
});
