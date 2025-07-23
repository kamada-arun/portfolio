import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // GitHub Pages用のベースパス
  plugins: [react()],
})
