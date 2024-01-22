import {describe, expect, test} from 'vitest';

import {rotate} from '../../source/ui/internals/rotate.js';

describe('rotate', () => {
  test('works', () => {
    let result = rotate([1, 2, 3, 4, 5], 2);

    expect(result).toEqual([4, 5, 1, 2, 3]);
  });
});
