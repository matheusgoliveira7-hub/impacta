import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Compatibilidade com repositório 'impacta' no GitHub Pages (https://<usuario>.github.io/impacta/)
  // No desenvolvimento local (npm run dev), adota '/'; em build de produção, adota '/impacta/' por padrão
  base: process.env.VITE_BASE_PATH || (mode === 'production' ? '/impacta/' : '/'),
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
}))
