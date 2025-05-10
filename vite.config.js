import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg'],
  server: {
    port: 3000,
    open: true
  }
}) 