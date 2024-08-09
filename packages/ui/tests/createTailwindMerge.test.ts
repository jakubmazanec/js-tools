import {describe, expect, test} from 'vitest';

import {createTailwindConfig, createTailwindMerge} from '../source/development.js';

describe('createTailwindMerge', () => {
  test('works', () => {
    let merge = createTailwindMerge(createTailwindConfig());

    expect(merge('bg-red-400 text-red-400 text-red-500 text-current')).toBe(
      'bg-red-400 text-current',
    );
    expect(merge('pr-4 px-3')).toBe('px-3');
    expect(merge('px-3 pr-4')).toBe('px-3 pr-4');
    expect(merge('pr-15 px-13')).toBe('px-13');
    expect(merge('px-13 pr-15')).toBe('px-13 pr-15');
  });
});
