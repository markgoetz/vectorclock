import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        icon: false,
        svgProps: {
          className: 'icon',
          width: '120',
          height: '120',
        },
      },
    }),
  ],
})
