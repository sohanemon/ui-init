const { execSync } = require('child_process');
const { success } = require('./constant');

function nextTemplate(args) {
  let installer;
  switch (true) {
    case args.includes('pnpm'):
      installer = '--use-pnpm';
      break;
    case args.includes('yarn'):
      installer = '--use-yarn';
      break;
    default:
      installer = '';
      break;
  }
  console.log();
  console.log('------------------------------------------');
  console.log('Initializing project with Next.js Template');
  console.log('------------------------------------------');
  console.log();
  try {
    execSync(
      `npx create-next-app -e https://github.com/sohanemon/next-template ${installer}`,
      { stdio: 'inherit' }
    );
    success();
  } catch (error) {
    console.error('Failed to install libraries:', error);
  }
}

module.exports = nextTemplate;
