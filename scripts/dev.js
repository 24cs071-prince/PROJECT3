#!/usr/bin/env node

const { spawn } = require('child_process');
const open = require('open').default;

const devServer = spawn('npx', ['next', 'dev'], {
  stdio: 'inherit',
  shell: true
});

// Wait 3 seconds for server to start, then open browser
setTimeout(() => {
  open('http://localhost:3000');
}, 3000);

// Handle process termination
process.on('SIGINT', () => {
  devServer.kill();
  process.exit();
});
