/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// Detect if we're building docs or the library
const isDocs = process.env.BUILD_MODE === 'docs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ insertTypesEntry: !isDocs }), // Only generate types for library build
  ],
  test: {
    coverage: {
      reporter: ['html', 'json', 'text'],
    },
    environment: 'jsdom',
    exclude: ['lib', 'node_modules', 'docs'],
    globals: true,
    setupFiles: 'src/setup-tests.ts',
  },
  server: {
    host: 'localhost', // or true, or '0.0.0.0'
    port: 5173,
  },
  base: '/', // Ensures proper routing for Vercel
  build: isDocs
    ? {
        outDir: 'docs', // Docs build
        emptyOutDir: true,
      }
    : {
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