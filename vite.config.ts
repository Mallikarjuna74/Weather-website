import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base:`/Weather-website/`,
  plugins: [react(), tailwindcss()],
  server: {
    open: '/index.html',
  },
})
