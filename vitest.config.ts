import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        transformMode: {
            web: [/.[tj]sx?$/], // Enable SWC for TypeScript/JSX
        },
    },
});
