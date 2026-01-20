// app/vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    
    // --- ADD THIS 'server' SECTION ---
    server: {
        proxy: {
            // This tells Vite to proxy any request starting with '/api'
            // to 'http://localhost:5173' (or whatever your dev port is).
            // This ensures that /api/search-assets and /api/get-asset-details
            // are treated as API endpoints, not SPA routes.
            '/api': {
                target: 'http://localhost:5173', // Your dev server URL
                changeOrigin: true,
                secure: false,
            }
        }
    }
});