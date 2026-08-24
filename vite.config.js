import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ship every asset as a real self-hosted file URL (no inline data-URIs)
    assetsInlineLimit: 0,
  },
})
