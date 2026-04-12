import { defineConfig } from 'tsdown';
import solid from 'unplugin-solid/rolldown';

// export both js and jsx
export default defineConfig([
    {
        platform: 'neutral',
        // use the solid plugin to handle jsx
        plugins: [solid()],
        entry: [
            './src/index.ts',
            './src/ui/index.ts',
            './src/icons/**/*.tsx',
            '!./src/**/*.stories.tsx',
        ],
        inputOptions: {
            transform: {
                jsx: 'preserve',
            },
        },
        outExtensions: () => ({ js: '.jsx' }),
        deps: {
            neverBundle: ['solid-js'],
        },
    },
]);
