#! /usr/bin/env node

const args = `${process.argv}`;
console.log(args)
const runTW = require('./tw');
if (!args.includes('init'))
  return console.log('Please enter the argument broh!');
console.log();
console.log('---------------------------------------------------');
console.log('Initializing project with `npx sohanemon init --tw`');
console.log('---------------------------------------------------');
console.log();
runTW();
