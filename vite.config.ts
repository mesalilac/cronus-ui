import { resolve } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import solid from 'vite-plugin-solid';

export default defineConfig({
    plugins: [solid(), tailwindcss(), checker({ typescript: true })],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'CronusUI',
            formats: ['es'],
        },
    },
});
