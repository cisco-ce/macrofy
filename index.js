const rollup = require('rollup')
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve').default;
const nodeBuiltins = require('rollup-plugin-node-builtins');

module.exports = async function (input, output) {
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
