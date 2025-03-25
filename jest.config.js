module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy'
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  };
  