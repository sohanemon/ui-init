#! /usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const code = require('../configs/code');

// Define the libraries to install
const libraries = [
  'clsx',
  'tailwind-merge',
  'framer-motion',
  'lucide-react',
  'tailwindcss-debug-screens',
  'zustand',
];

// Install the libraries
function runTW(installer) {
  try {
    execSync(`${installer} ${libraries.join(' ')}`, { stdio: 'inherit' });
    console.log('Libraries installed successfully!');
  } catch (error) {
    console.error('Failed to install libraries:', error);
  }

  fs.mkdirSync('./app', { recursive: true }, () =>
    console.log('/app \nthis app initiates with noSrc. LOL')
  );
  fs.mkdirSync('./app/[...catch]', { recursive: true }, () =>
    console.log('/app/[...catch] \nTo catch all route. LOL')
  );
  fs.mkdirSync('./public/assets/images', { recursive: true }, () =>
    console.log(
      '/public/assets/images directory created\nStore your images here.'
    )
  );
  fs.mkdirSync('./components/ui', { recursive: true }, () =>
    console.log(
      '/components/ui directory created\nYour UI components directory'
    )
  );
  fs.mkdirSync('./lib/store', { recursive: true }, () =>
    console.log('/lib/store directory created\nIts your Global State broh.')
  );

  fs.writeFileSync('./app/globals.css', code.globalsCss);
  fs.writeFileSync('./app/page.tsx', code.page);
  fs.writeFileSync('./app/[...catch]/page.tsx', code.page);
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
