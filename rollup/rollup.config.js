const url = require('rollup-plugin-url');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    url({
      include: ['**/*.render.js']
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};
