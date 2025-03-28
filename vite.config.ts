import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  assetsInclude: ['**/*.xml', '**/*.txt'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendors: ['framer-motion', 'react-icons'],
          utils: ['axios'],
          routing: ['react-router-dom'],
          animation: ['react-type-animation']
        }
      }
    }
  }
});
