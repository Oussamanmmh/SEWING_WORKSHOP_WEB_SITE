import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : '/SEWING_WORKSHOP_WEB_SITE/',
  plugins: [react()],
})
