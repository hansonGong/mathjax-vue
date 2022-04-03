import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import replace from 'rollup-plugin-replace'
import packageJSON from './package.json'

export default defineConfig({
  plugins: [vue(), vueJsx(), dts()],
  build: {
    outDir: 'lib',
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'mathJaxVue',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      plugins: [
        replace({
          __buildVersion: JSON.stringify(packageJSON.version),
        }),
      ],
      output: {
        name: 'mathJaxVue',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
