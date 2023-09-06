/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@mui/styled-engine': resolve(
        __dirname,
        'node_modules/@mui/styled-engine-sc'
      ),
    },
  },
  base: '/',
  plugins: [react()],
});
