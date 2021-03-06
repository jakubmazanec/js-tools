module.exports = {
  root: true,
  extends: [
    '@jakubmazanec/eslint-config',
    '@jakubmazanec/eslint-config/nodejs',
    '@jakubmazanec/eslint-config/prettier',
  ],
  ignorePatterns: [
    '.next/',
    'bin/',
    'build/',
    'coverage/',
    'dist/',
    'node_modules/',
    'public/',
    '*.json',
    '*.md',
    '*.mdx',
    '*.d.ts',
  ],
};
