import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. Added this line

export default defineConfig({
  plugins: [react()],

  // 2. Added this whole "resolve" section for the fix
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // --- Keeping your existing configuration below ---
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'react-helmet-async'
    ]
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
