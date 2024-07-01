export const BUILD_DIRECTORY = 'build';
export const SOURCE_DIRECTORY = 'source';

export const BUILD_TO_ESM_COMMAND = `esbuild "${SOURCE_DIRECTORY}/**/*" --platform=node --target=node20.8 --outdir=${BUILD_DIRECTORY} --sourcemap`;
export const BUILD_TO_CJS_COMMAND = `esbuild "${SOURCE_DIRECTORY}/**/*" --platform=node --target=node20.8 --format=cjs --outdir=${BUILD_DIRECTORY} --sourcemap`;
export const FORMAT_COMMAND = 'prettier . --write --ignore-unknown';
export const TEST_COMMAND = 'vitest run --coverage --passWithNoTests';

export const CARSON_PACKAGE_NAME = '@jakubmazanec/carson';
export const TEMPLATE_PACKAGE_NAME = '@jakubmazanec/carson-templates';
export const LINTER_CONFIG_PACKAGE_NAME = '@jakubmazanec/eslint-config';
export const CHANGELOG_PACKAGE_NAME = '@jakubmazanec/changesets-changelog';
export const UI_PACKAGE_NAME = '@jakubmazanec/ui';

export const MAIN_BRANCH_NAMES = new Set(['main', 'master']);
export const DEVELOPMENT_BRANCH_NAMES = new Set(['development', 'develop', 'dev']);

export const LINT_IGNORE_PATTERNS = [
  '.cache/',
  '.turbo/',
  'bin/',
  'coverage/',
  'node_modules/',
  'public/',
  '*.d.ts',
  '*.json',
  '*.md',
  '*.mdx',
  `${BUILD_DIRECTORY}/`,
].sort();

export const FORMAT_IGNORE_PATTERNS = [
  '.cache/',
  '.turbo/',
  'coverage/',
  'node_modules/',
  'public/',
  'npm-shrinkwrap.json',
  'package-lock.json',
  'CHANGELOG.md',
  'LICENSE.md',
  `${BUILD_DIRECTORY}/`,
].sort();

export const TSCONFIG_COMPILER_OPTIONS = {
  allowSyntheticDefaultImports: true,
  composite: true,
  exactOptionalPropertyTypes: true,
  forceConsistentCasingInFileNames: true,
  isolatedModules: true,
  jsx: 'react-jsx',
  lib: ['dom', 'dom.iterable', 'es2022'],
  module: 'node16',
  moduleResolution: 'node16',
  noEmitOnError: false, // TODO: change to `true` when this is fixed: https://github.com/kulshekhar/ts-jest/issues/4198
  noImplicitOverride: true,
  noImplicitReturns: true,
  noUncheckedIndexedAccess: true,
  skipLibCheck: true,
  strict: true,
  target: 'es2022',
};

export const PRETTIER_OPTIONS = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: false,
  embeddedLanguageFormatting: 'auto',
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  // TODO: remove when this is fixed: https://github.com/prettier/prettier/issues/15956
  overrides: [
    {
      files: ['tsconfig.json'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};

export const TYPEDOC_CONFIG = {
  plugin: 'typedoc-plugin-markdown',
  entryPoints: [`./${SOURCE_DIRECTORY}/main.ts`],
  out: 'docs',
  readme: 'none',
  githubPages: false,
  hideBreadcrumbs: true,
};
