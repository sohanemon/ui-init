const { execSync } = require('child_process');

function success(projectName = 'my-app') {
  console.log();
  console.log("Successfully Initialized! Let's hack broh");
  console.log();
  return;
  try {
    execSync(`cd ${projectName}`, { stdio: 'inherit' });
    execSync(`git init`, { stdio: 'inherit' });
    execSync(`git add .`, { stdio: 'inherit' });
    execSync(`git commit -m "Initialized with sohanemon"`, {
      stdio: 'inherit',
    });
    execSync(`git branch -M main`, { stdio: 'inherit' });
    execSync(`code .`, { stdio: 'inherit' });
    console.log();
  } catch (error) {
    console.error('Failed to commit:', error);
  }
}

module.exports.success = success;
