import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@mui/styled-engine': path.resolve(__dirname, 'node_modules/@mui/styled-engine-sc'),
        },
    },
    base: '/',
    plugins: [react()],
});
