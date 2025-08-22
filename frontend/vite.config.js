import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { apiMiddleware } from './server/api'; // <-- Import our new middleware

export default defineConfig({
  base: '/clear-cut-markets/',
  plugins: [
    vue(),
    // Add the middleware plugin
    {
      name: 'api-middleware',
      configureServer(server) {
        server.middlewares.use(apiMiddleware);
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: [
      '@supabase/supabase-js',
    ],
  },
});