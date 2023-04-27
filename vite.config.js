import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import NodeGlobalsPolyfillPlugin from "@esbuild-plugins/node-globals-polyfill";
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { resolve, dirname } from "node:path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      VueI18nPlugin({
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**')
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
          NodeGlobalsPolyfillPlugin({buffer: true, process: true})
      ]
    }
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()]
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  server: {
    proxy: {
      '/api/v1': {
        target: "http://3.0.98.217:8080/",
        changeOrigin: true
      }
    }
  }
})
