import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    resolve: {
    alias: {
      // '@': resolve(__dirname, './src/pages'),
      icons: resolve(__dirname, './src/assets/icons'),
      images: resolve(__dirname, './src/assets/images'),
    },
  },
})
