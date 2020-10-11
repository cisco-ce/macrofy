#!/usr/bin/env node

const rollup = require('rollup')
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve').default;
const nodeBuiltins = require('rollup-plugin-node-builtins');

async function build(input, output) {
  const bundle = await rollup.rollup({
    input,
    plugins: [
      commonjs(),
      json(),
      nodeBuiltins(),
      resolve(),
    ],
  });

  await bundle.write({
    exports: 'auto',
    format: 'cjs',
    file: output,
  });
}

if (process.argv.length < 3) {
  console.error('usage: macrofy <input> [output]');
  process.exit(1);

}

build(process.argv[2], process.argv[3] || 'bundle.js');
