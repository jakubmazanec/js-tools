import {describe, expect, test} from 'vitest';

import {isRootPath} from '../source/isRootPath.js';

describe('isRootPath()', () => {
  test.each([
    {
      path: '/',
      result: true,
    },
    {
      path: 'c:/foo/bar/',
      result: false,
    },
  ])('correctly checks if $path is a root path', ({path, result}) => {
    expect(isRootPath(path)).toEqual(result);
  });
});
