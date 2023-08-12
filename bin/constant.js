const { execSync } = require('child_process');

function success() {
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

module.exports.success = success;
