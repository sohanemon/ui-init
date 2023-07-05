#! /usr/bin/env node

// const { execSync } = require('child_process');

// // Define the libraries to install
// const libraries = [
//   'clsx',
//   'tailwind-merge',
//   'tailwindcss-animate',
//   'zustand',
//   '@heroicons/react',
// ];

// // Install the libraries
// try {
//   execSync(`yarn add ${libraries.join(' ')}`, { stdio: 'inherit' });
//   console.log('Libraries installed successfully!');
// } catch (error) {
//   console.error('Failed to install libraries:', error);
// }

const fs = require('fs');
const code = require('../configs/code');

fs.mkdir('./public/assets/images', { recursive: true }, () =>
  console.log('/public/assets/images directory created')
);
fs.mkdir('./components/ui', { recursive: true }, () =>
  console.log('/components/ui directory created')
);
fs.writeFileSync('./app/globals.css', code.globalsCss);
fs.writeFileSync('./tailwind.config.js', code.tailwindConfig);
fs.writeFileSync('./lib/utils.ts', code.utils);
fs.writeFileSync('./README.md', require('../configs/readme'));
console.log('Successfully Initialized!');
