import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  // FIX: Explicitly set the base path to the root '/'.
  // This forces the build to use correct paths and overrides any
  // old/cached settings.
  base: '/',
  plugins: [
    vue(),
    // The custom local middleware has been removed for production builds
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
