import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Конфигурация приложения
 *
 * @link https://vitejs.dev/config/
 */
export default defineConfig({
    base:    '',
    plugins: [
        react(),
    ],
    build: {
        minify:            'terser',
        assetsInlineLimit: 1024,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            css:  { charset: false },
            scss: {
                sassOptions: {
                    outputStyle: 'expanded',
                },
                charset:        false,
                additionalData: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/_mixins.scss";
                `
            }
        }
    }
});
