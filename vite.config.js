import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/scrimba_proj_1-info_card/',
  plugins: [react()],
  build: {
    outDir: 'build'
  }
})
