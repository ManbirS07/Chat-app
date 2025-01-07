import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()]
})

//With this setup, Vite will proxy requests to /api to http://localhost:8000,
//  ensuring that your API requests are sent to the correct backend server.
