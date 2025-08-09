const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const path = require('path');

// https://vitejs.dev/config/
module.exports = defineConfig({
  // This is the critical fix for the 404 deployment errors.
  base: '/clear-cut-markets/', 
  
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // This block is good practice to ensure Supabase is handled correctly.
  optimizeDeps: {
    include: [
      '@supabase/supabase-js',
    ],
  },
});