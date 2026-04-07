import { resolve } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import solid from 'vite-plugin-solid';

export default defineConfig({
    resolve: {
        tsconfigPaths: true,
    },
    plugins: [
        solid(),
        tailwindcss(),
        checker({ typescript: true }),
        dts({ tsconfigPath: './tsconfig.build.json', rollupTypes: true }),
    ],
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
                icons: resolve(__dirname, 'src/icons/index.ts'),
                ui: resolve(__dirname, 'src/ui/index.ts'),
            },
            name: 'cronus-ui',
            formats: ['es'],
        },
        rolldownOptions: {
            external: ['solid-js', 'gsap'],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].js',
            },
        },
    },
});
