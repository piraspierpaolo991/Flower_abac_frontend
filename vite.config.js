import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // Alias per import più puliti
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        port: 3000,
        open: true, // apre il browser automaticamente
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
});
