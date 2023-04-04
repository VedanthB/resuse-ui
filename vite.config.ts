/// <reference types="vitest" />

import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';

import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      reporter: ['html', 'json', 'text'],
    },
    environment: 'jsdom',
    exclude: ['lib', 'node_modules', 'docs'],
    globals: true,
    setupFiles: 'src/setup-tests.ts',
  },
});
