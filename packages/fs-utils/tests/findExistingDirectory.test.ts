import path from 'node:path';
import {describe, expect, test} from 'vitest';

import {findExistingDirectory} from '../source/findExistingDirectory.js';
import {PROJECT_PATH} from './constants.js';

describe('findExistingDirectory()', () => {
  test.each([
    {
      targetPath: path.join(PROJECT_PATH, 'tests'),
      existingPath: path.join(PROJECT_PATH, 'tests'),
    },
    {
      targetPath: path.join(PROJECT_PATH, 'this-folder-should-not-exist'),
      existingPath: PROJECT_PATH,
    },
    {
      targetPath: path.join(PROJECT_PATH, 'package.json', 'this-folder-should-not-exist'),
      existingPath: PROJECT_PATH,
    },
  ])('from $targetPath find existing directory', async ({targetPath, existingPath}) => {
    await expect(findExistingDirectory(targetPath)).resolves.toEqual(existingPath);
  });
});
