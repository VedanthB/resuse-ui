/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import path from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts()],
  test: {
    coverage: {
      reporter: ['html', 'json', 'text'],
    },
    environment: 'jsdom',
    exclude: ['lib', 'node_modules', 'docs'],
    globals: true,
    setupFiles: 'src/setup-tests.ts',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'reuse-ui',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
