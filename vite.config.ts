import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Ensure dev server opens in external browser, not VS Code webview
  server: {
    host: true, // listen on all addresses (0.0.0.0) so mobile on same WiFi can connect
    port: 5173,
    strictPort: false,
  },
});
