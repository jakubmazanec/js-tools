import {describe, expect, test} from 'vitest';

import {expandArguments} from '../../source/internals.js';

describe('expandArguments()', () => {
  test.each([
    {argv: ['-abcd'], result: ['-a', '-b', '-c', '-d']},
    {argv: ['-ab', '-cd'], result: ['-a', '-b', '-c', '-d']},
    {argv: ['-a', '-bcd'], result: ['-a', '-b', '-c', '-d']},
    {argv: ['-ab', '--cd'], result: ['-a', '-b', '--cd']},
  ])('correctly expands group options', ({argv, result}) => {
    expect(expandArguments(argv)).toEqual(result);
  });
});
