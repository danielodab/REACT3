import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Isso permite que o servidor seja acessível externamente
    port: 3000, // Escolha a porta que preferir
  },
});