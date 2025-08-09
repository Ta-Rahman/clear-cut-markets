import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // This explicitly tells Vite to prefix all asset paths with your repository name.
  // This will fix the 404 errors on GitHub Pages.
  base: '/clear-cut-markets/', 
  
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})