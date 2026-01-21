export default {
  testEnvironment: 'jsdom',
  transform: {},
  testMatch: ['**/tests/**/*.test.js', '**/tests/**/*.test.jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/main.jsx'
  ],
  coverageDirectory: 'coverage',
  verbose: true
};
