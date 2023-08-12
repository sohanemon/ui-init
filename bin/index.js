#! /usr/bin/env node

const args = `${process.argv}`;
console.log(args);
const runTW = require('./tw');
const runNextTemplate = require('./next-template');
if (!args.includes('init') || !args.includes('template'))
  return console.log('Please enter the argument broh!');
if (args.includes('template')) return runNextTemplate(args);
if (args.includes('--pnpm')) return runTW('pnpm add');
if (args.includes('--yarn')) return runTW('yarn add');
runTW('npm install');
