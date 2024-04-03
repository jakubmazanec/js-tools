import fs from 'node:fs';
import {createRequire} from 'node:module';
import semver from 'semver';

import {
  CARSON_PACKAGE_NAME,
  CHANGELOG_PACKAGE_NAME,
  LINTER_CONFIG_PACKAGE_NAME,
  TEMPLATE_PACKAGE_NAME,
  UI_PACKAGE_NAME,
} from './constants.js';

let require = createRequire(import.meta.url);
let carsonPackageVersion =
  semver
    .minVersion(
      (
        JSON.parse(
          fs.readFileSync(require.resolve(`${TEMPLATE_PACKAGE_NAME}/package.json`), {
            encoding: 'utf8',
          }),
        ) as {peerDependencies: Record<string, string>}
      ).peerDependencies[CARSON_PACKAGE_NAME] ?? '^1.0.0',
    )
    ?.format() ?? '1.0.0';
let isCarsonPackageVersionPrerelease = !!semver.prerelease(carsonPackageVersion)?.length;
let templatesPackageVersion = (
  JSON.parse(
    fs.readFileSync(require.resolve(`${TEMPLATE_PACKAGE_NAME}/package.json`), {
      encoding: 'utf8',
    }),
  ) as {version: string}
).version;
let isTemplatesPackageVersionPrerelease = !!semver.prerelease(templatesPackageVersion)?.length;

export const DEPENDENCY_VERSIONS: Record<string, string> = {
  [CARSON_PACKAGE_NAME]:
    isCarsonPackageVersionPrerelease ? carsonPackageVersion : `^${carsonPackageVersion}`,
  [TEMPLATE_PACKAGE_NAME]:
    isTemplatesPackageVersionPrerelease ? templatesPackageVersion : `^${templatesPackageVersion}`,
  [CHANGELOG_PACKAGE_NAME]: '^2.0.0',
  [LINTER_CONFIG_PACKAGE_NAME]: '^3.0.0',
  [UI_PACKAGE_NAME]: '^0.1.0',

  '@changesets/cli': '^2.0.0',
  '@chromatic-com/storybook': '^1.0.0',
  '@remix-run/dev': '^2.0.0',
  '@remix-run/express': '^2.0.0',
  '@remix-run/node': '^2.0.0',
  '@remix-run/react': '^2.0.0',
  '@remix-run/serve': '^2.0.0',
  '@storybook/addon-controls': '^8.0.0',
  '@storybook/addon-essentials': '^8.0.0',
  '@storybook/addon-interactions': '^8.0.0',
  '@storybook/addon-links': '^8.0.0',
  '@storybook/blocks': '^8.0.0',
  '@storybook/preview-api': '^8.0.0',
  '@storybook/react': '^8.0.0',
  '@storybook/react-vite': '^8.0.0',
  '@storybook/test': '^8.0.0',
  '@testing-library/jest-dom': '^6.0.0',
  '@testing-library/react': '^14.0.0',
  '@types/lodash': '^4.0.0',
  '@types/node': '^20.0.0',
  '@types/react': '^18.0.0',
  '@types/react-dom': '^18.0.0',
  '@vitest/coverage-v8': '^1.0.0',
  autoprefixer: '^10.0.0',
  concurrently: '^8.0.0',
  'cross-env': '^7.0.0',
  'del-cli': '^5.0.0',
  esbuild: '^0.19.0',
  eslint: '^8.0.0',
  'happy-dom': '^13.0.0',
  isbot: '^4.0.0',
  lodash: '^4.0.0',
  'patch-package': '^6.0.0',
  prettier: '^3.0.0',
  'prettier-plugin-packagejson': '^2.0.0',
  'prettier-plugin-tailwindcss': '^0.5.0',
  react: '^18.0.0',
  'react-dom': '^18.0.0',
  storybook: '^8.0.0',
  tailwindcss: '^3.0.0',
  turbo: '^1.0.0',
  typedoc: '^0.24.0',
  'typedoc-plugin-markdown': '^3.0.0',
  typescript: '^5.0.0',
  vite: '^5.0.0',
  vitest: '^1.0.0',
};
