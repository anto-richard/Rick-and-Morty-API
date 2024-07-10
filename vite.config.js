import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Rick-and-Morty-API/', // This is the base URL of your GitHub Pages site
})
