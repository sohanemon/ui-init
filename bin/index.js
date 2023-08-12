#! /usr/bin/env node

const args = `${process.argv}`;
console.log(args);
const runTW = require('./tw');
const runNextTemplate = require('./next-template');
if (!args.includes('init') || !args.includes('next'))
  return console.log('Please enter the argument broh!');
if (args.includes('next')) return runNextTemplate(args);
if (args.includes('--pnpm')) return runTW('pnpm add');
if (args.includes('--yarn')) return runTW('yarn add');
runTW('npm install');
