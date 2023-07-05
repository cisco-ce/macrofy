#!/usr/bin/env node

const build = require('./index');

if (process.argv.length < 3) {
  console.error('usage: macrofy <input> [output]');
  process.exit(1);

}

build({input:process.argv[2], output: process.argv[3] || 'bundle.js', minify:false});
