import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
// import eslint from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // , eslint()
    dts({ rollupTypes: true }),
  ],
  define: {
    'process.env': {},
  },
});
