// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src');

export default defineConfig({
    root,
    build: {
        emptyOutDir: true,
        outDir:"/dist",
        rollupOptions: {
            input: {
                complete: resolve(root, 'index.html'),
                simple: resolve(root, 'simple/index.html'),
            },
        },
    },
})