#!/usr/bin/env node

const macrofy = require('./index');

if (process.argv.length < 3) {
  console.error('usage: macrofy <input> [output]');
  process.exit(1);

}

build(process.argv[2], process.argv[3] || 'bundle.js');
