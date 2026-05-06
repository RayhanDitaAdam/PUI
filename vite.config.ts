import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
  },
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-core';
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('react-icons')) {
              return 'vendor-icons';
            }
            if (id.includes('leaflet')) {
              return 'vendor-maps';
            }
            return 'vendor';
          }
        }
      }
    }
  }
})
