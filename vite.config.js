import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),splitVendorChunkPlugin()],
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: '/src/main.jsx',
    },
  },
})
