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
// // try {
// //   execSync(`yarn add ${libraries.join(' ')}`, { stdio: 'inherit' });
// //   console.log('Libraries installed successfully!');
// // } catch (error) {
// //   console.error('Failed to install libraries:', error);
// // }

const fs = require('fs');

// Define the file path
const filePath = './style.css';

// Define the content to write
const contentToWrite = `
/* Additional CSS styles */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
`;

// Write the content to the file
fs.writeFileSync(filePath, contentToWrite);
console.log('File modified successfully!');
