#! /usr/bin/env node

const { execSync } = require('child_process');

// Define the libraries to install
const libraries = [
  'clsx',
  'tailwind-merge',
  'tailwindcss-animate',
  'zustand',
  '@heroicons/react',
];

// Install the libraries
try {
  execSync(`yarn add ${libraries.join(' ')}`, { stdio: 'inherit' });
  console.log('Libraries installed successfully!');
} catch (error) {
  console.error('Failed to install libraries:', error);
}

const fs = require('fs');

fs.writeFileSync('./app/globals.css', require('../configs/code').globalsCss);
fs.writeFileSync(
  './tailwind.config.js',
  require('../configs/code').tailwindConfig
);
console.log('Successfully Initialized!');
