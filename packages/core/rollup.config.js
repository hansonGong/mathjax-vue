import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import ts from 'rollup-plugin-typescript2'
import filesize from 'rollup-plugin-filesize'

const getPath = (_path) => path.resolve(__dirname, _path)

// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'),
  extensions: ['.ts'],
})

// 基础配置
const commonConf = {
  input: getPath('./src/index.ts'),
  plugins: [
    resolve(['.js', '.ts']),
    babel({
      exclude: '**/node_modules/**',
    }),
    commonjs(),
    tsPlugin,
    buble(),
    terser(),
    filesize(),
  ],
  output: [
    {
      file: './lib/index.min.js',
      format: 'esm',
      name: 'mathJaxCore',
    },
  ],
}

export default commonConf
