// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root,
    build: {
        emptyOutDir: true,
        outDir: outDir,
        rollupOptions: {
            input: {
                complete: resolve(root, 'index.html'),
                simple: resolve(root, 'simple/index.html'),
            },
        },
    },
})