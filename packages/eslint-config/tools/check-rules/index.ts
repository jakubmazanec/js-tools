import a11yRulesConfig from '../../src/rules/a11y';
import eslintRulesConfig from '../../src/rules/eslint';
import eslintCommentsRulesConfig from '../../src/rules/eslint-comments';
import importRulesConfig from '../../src/rules/import';
import jestRulesConfig from '../../src/rules/jest';
import jestFormattingConfig from '../../src/rules/jest-formatting';
import nextjsRulesConfig from '../../src/rules/nextjs';
import nodeRulesConfig from '../../src/rules/node';
import prettierRulesConfig from '../../src/rules/prettier';
import promiseRulesConfig from '../../src/rules/promise';
import reactRulesConfig from '../../src/rules/react';
import reactHooksRulesConfig from '../../src/rules/react-hooks';
import testingLibraryRulesConfig from '../../src/rules/testing-library';
import typescriptRulesConfig from '../../src/rules/typescript';
import unicornRulesConfig from '../../src/rules/unicorn';
import {allRules} from './allRules';

const a11yRules = Object.entries(a11yRulesConfig!).map(([ruleName]) => ruleName);
const eslintRules = Object.entries(eslintRulesConfig!).map(([ruleName]) => ruleName);
const eslintCommentsRules = Object.entries(eslintCommentsRulesConfig!).map(
  ([ruleName]) => ruleName,
);
const importRules = Object.entries(importRulesConfig!).map(([ruleName]) => ruleName);
const jestRules = Object.entries(jestRulesConfig!).map(([ruleName]) => ruleName);
const jestFormattingRules = Object.entries(jestFormattingConfig!).map(([ruleName]) => ruleName);
const nodeRules = Object.entries(nodeRulesConfig!).map(([ruleName]) => ruleName);
const prettierRules = Object.entries(prettierRulesConfig!).map(([ruleName]) => ruleName);
const promiseRules = Object.entries(promiseRulesConfig!).map(([ruleName]) => ruleName);
const reactHookRules = Object.entries(reactHooksRulesConfig!).map(([ruleName]) => ruleName);
const reactRules = Object.entries(reactRulesConfig!).map(([ruleName]) => ruleName);
const testingLibraryRules = Object.entries(testingLibraryRulesConfig!).map(
  ([ruleName]) => ruleName,
);
const typescriptRules = Object.entries(typescriptRulesConfig!).map(([ruleName]) => ruleName);
const unicornRules = Object.entries(unicornRulesConfig!).map(([ruleName]) => ruleName);
const nextjsRules = Object.entries(nextjsRulesConfig!).map(([ruleName]) => ruleName);

// eslint-disable-next-line @typescript-eslint/require-array-sort-compare -- in this case it doesn't matter
const usedRules = [
  ...a11yRules,
  ...eslintRules,
  ...eslintCommentsRules,
  ...importRules,
  ...jestRules,
  ...jestFormattingRules,
  ...nodeRules,
  ...prettierRules,
  ...promiseRules,
  ...reactHookRules,
  ...reactRules,
  ...testingLibraryRules,
  ...typescriptRules,
  ...unicornRules,
  ...nextjsRules,
].sort();

const missingRules: string[] = [];

allRules.forEach((ruleName: string) => {
  if (!usedRules.includes(ruleName)) {
    missingRules.push(ruleName);
  }
});

missingRules.sort();

const deprecatedRules: string[] = [];

usedRules.forEach((ruleName: string) => {
  if (!allRules.includes(ruleName)) {
    deprecatedRules.push(ruleName);
  }
});

deprecatedRules.sort();

console.log('Deprecated rules:', deprecatedRules);
console.log('Missing rules:', missingRules);
