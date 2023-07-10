#! /usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const code = require('../configs/code');

// Define the libraries to install
const libraries = [
  'clsx',
  'tailwind-merge',
  'framer-motion',
  'tailwindcss-debug-screens',
  'zustand',
];

// Install the libraries
function runTW() {
  try {
    execSync(`yarn add ${libraries.join(' ')}`, { stdio: 'inherit' });
    console.log('Libraries installed successfully!');
  } catch (error) {
    console.error('Failed to install libraries:', error);
  }

  fs.mkdirSync('./public/assets/images', { recursive: true }, () =>
    console.log('/public/assets/images directory created')
  );
  fs.mkdirSync('./components/atoms', { recursive: true }, () =>
    console.log('/components/atoms directory created')
  );
  fs.mkdirSync('./components/molecules', { recursive: true }, () =>
    console.log('/components/molecules directory created')
  );
  fs.mkdirSync('./components/organisms', { recursive: true }, () =>
    console.log('/components/organisms directory created')
  );
  fs.mkdirSync('./lib/store', { recursive: true }, () =>
    console.log('/lib/store directory created')
  );

  fs.writeFileSync('./app/globals.css', code.globalsCss);
  fs.writeFileSync('./app/page.tsx', code.page);
  fs.writeFileSync('./app/layout.tsx', code.layout);
  fs.writeFileSync('./tailwind.config.js', code.tailwindConfig);
  fs.writeFileSync('./lib/utils.ts', code.utils, { flag: 'w' });
  fs.writeFileSync('./README.md', require('../configs/readme'));
  console.log();
  console.log("Successfully Initialized! Let's hack broh");
  console.log();
  try {
    execSync(`git add .`, { stdio: 'inherit' });
    execSync(`git commit -m "Initialized with sohanemon"`, {
      stdio: 'inherit',
    });
    console.log();
  } catch (error) {
    console.error('Failed to commit:', error);
  }
}

module.exports = runTW;
