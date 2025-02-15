import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Enables polling to detect file changes
    },
    hmr: {
      overlay: false, // You can set this to true if you want errors to show in an overlay
    },
  },
})
