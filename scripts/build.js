#!/usr/bin/env node

const { spawnSync } = require('child_process');

const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);
const isWindows = process.platform === 'win32';

function run(command, args, envOverrides = {}) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    env: {
      ...process.env,
      ...envOverrides,
    },
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function runNpx(args, envOverrides = {}) {
  if (isWindows) {
    const commandLine = ['npx', ...args].join(' ');
    run('cmd.exe', ['/d', '/s', '/c', commandLine], envOverrides);
    return;
  }

  run('npx', args, envOverrides);
}

if (!hasDatabaseUrl) {
  console.warn('[build] DATABASE_URL is not set. Skipping prisma db push and using a placeholder URL for prisma generate.');
}

runNpx(['prisma', 'generate'], {
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://user:pass@localhost:5432/db',
});

if (hasDatabaseUrl) {
  runNpx(['prisma', 'db', 'push']);
}

runNpx(['next', 'build']);