import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'autoprefixer.js',
  output: {
    dir: '../vendor',
    format: 'iife',
    name: 'global'
  },
  plugins: [commonjs()]
}
