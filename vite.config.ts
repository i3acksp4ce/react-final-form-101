import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/**
 * path alias
 * https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working
 *
 * fix cannot find __dirname
 * https://bobbyhadz.com/blog/typescript-cannot-find-name-dirname
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
