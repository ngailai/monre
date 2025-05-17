import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react(), tailwindcss()],
    build: {
        rollupOptions: {
            external: [
                /assets\/.*\.(png|jpg|jpeg|gif|svg)/, // Regex to exclude all images in assets folder
            ],
        },
    },
});
