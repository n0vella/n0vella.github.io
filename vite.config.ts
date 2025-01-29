import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(function () {
  return {
    plugins: [tailwindcss()],
  }
})
