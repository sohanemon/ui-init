#! /usr/bin/env node

const args = `${process.argv}`;
const runTW = require('./tw');
const runNextTemplate = require('./next-template');
const runExpressTsTemplate = require('./express');
if (
  !args.includes('init') &&
  !args.includes('next') &&
  !args.includes('express-ts')
) {
  console.log('Please enter the argument broh!');
  console.log();
  console.log('Example: `npx sohanemon@latest next my-app --pnpm`');
  console.log('Example: `npx sohanemon@latest express-ts my-express-app`');
  console.log('exiting ...');
  return;
}
if (args.includes('next')) return runNextTemplate(args);
if (args.includes('express-ts')) return runExpressTsTemplate(args);
if (args.includes('--pnpm')) return runTW('pnpm add');
if (args.includes('--yarn')) return runTW('yarn add');
runTW('npm install');
