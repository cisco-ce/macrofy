const rollup = require('rollup');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve').default;
const nodeBuiltins = require('rollup-plugin-node-builtins');
const { terser } = require('rollup-plugin-terser');

module.exports = async function build({ input, output, minify }) {
  const plugins = [
    commonjs(),
    json(),
    nodeBuiltins(),
    resolve(),
  ];

  if (minify) {
    plugins.push(terser());
  }

  const bundle = await rollup.rollup({
    input,
    plugins,
  });

  await bundle.write({
    exports: 'auto',
    format: 'es',
    file: output,
  });
};
