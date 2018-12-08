const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const ignore = require('rollup-plugin-ignore');

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    ignore(['fs', 'path', 'crypto']),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};
