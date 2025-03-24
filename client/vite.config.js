import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    swc: {
      jsc: {
        transform: {
          react: {
            throwIfNamespace: false,
          },
        },
      },
    },
  }), tailwindcss()],
  base: '/portfolio-website/'
})
