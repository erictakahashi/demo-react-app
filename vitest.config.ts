/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['**/*.test.{ts,tsx}'], // Only runs .test files
    exclude: ['**/node_modules/**', '**/dist/**', '**/*.spec.{ts,tsx}'], // Explicitly exclude .spec files
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/setup.ts',
        '**/*.d.ts',
        '**/*.config.*',
        '**/stories/*',
        '**/*.spec.*', // Exclude Playwright spec files from coverage
      ],
    },
  },
})
