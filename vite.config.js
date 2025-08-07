// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cool/', // ← Obligatoire pour GitHub Pages à ce chemin
  plugins: [react()]
})
