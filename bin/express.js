const { execSync } = require('child_process');
const { success } = require('./constant');

function runExpressTsTemplate(args = '') {
  let installer, projectName;

  projectName = args.split(',express-ts,')[1]?.split(',')[0];
  switch (true) {
    case args.includes('bun'):
      installer = 'bun install';
      break;
    case args.includes('pnpm'):
      installer = 'pnpm install';
      break;
    case args.includes('yarn'):
      installer = 'yarn';
      break;
    default:
      installer = 'npm install';
      break;
  }
  console.log();
  console.log('---------------------------------------------');
  console.log('Initializing project with Express TS Template');
  console.log('---------------------------------------------');
  console.log();
  if (!projectName) {
    console.log('Please add your project name');
    console.log();
    console.log('Example: `npx sohanemon express-ts my-express-app --yarn`');
    console.log('exiting ...');
    return;
  }
  try {
    execSync(
      `git clone https://github.com/sohanemon/express-ts ${projectName}`,
      {
        stdio: 'inherit',
      }
    );
    execSync(`cd ${projectName} && ${installer}`, {
      stdio: 'inherit',
    });
    execSync(`rm -rf ${projectName}/.git`, {
      stdio: 'inherit',
    });

    success(projectName);
  } catch (error) {
    console.error('Failed to install libraries:', error);
  }
}

module.exports = runExpressTsTemplate;
