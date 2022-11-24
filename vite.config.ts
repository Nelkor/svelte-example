import { resolve } from 'path'

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': resolve('src/modules'),
    },
  },
})
