export default {
  preset: 'ts-jest/presets/default',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.typecheck.json',
    },
  },

  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
