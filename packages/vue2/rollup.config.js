import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import replace from 'rollup-plugin-replace'
import packageJSON from './package.json'

const argv = process.argv.splice(2)
const formatType = argv[3]

const FORMAT_MAP = {
  es: 'es',
  umd: 'umd',
  iife: 'min',
}

const commonConf = {
  input: './src/index.js',
  external: ['vue'],
  plugins: [
    resolve(['.js', '.vue']),
    vue(),
    babel({
      exclude: '**/node_modules/**',
    }),
    commonjs(),
    buble(),
    terser(),
    filesize(),
    replace({
      __buildVersion: JSON.stringify(packageJSON.version),
    }),
  ],
  output: [
    {
      file: `./lib/index.${FORMAT_MAP[formatType]}.js`,
      format: formatType,
      name: 'mathJaxVue',
    },
  ],
}

export default commonConf
