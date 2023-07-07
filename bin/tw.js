#! /usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const code = require('../configs/code');

// Define the libraries to install
const libraries = [
  'clsx',
  'tailwind-merge',
  'tailwindcss-animate',
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

  fs.mkdir('./public/assets/images', { recursive: true }, () =>
    console.log('/public/assets/images directory created')
  );
  fs.mkdir('./components/ui', { recursive: true }, () =>
    console.log('/components/ui directory created')
  );
  fs.mkdir('./lib/store', { recursive: true }, () =>
    console.log('/lib/store directory created')
  );
  fs.writeFileSync('./app/globals.css', code.globalsCss);
  fs.writeFileSync('./app/page.tsx', code.page);
  fs.writeFileSync('./app/layout.tsx', code.layout);
  fs.writeFileSync('./tailwind.config.js', code.tailwindConfig);
  fs.writeFileSync('./lib/utils.ts', code.utils);
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
