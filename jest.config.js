module.exports = {
  projects: ['<rootDir>/apps/asklisa/server/jest.config.js', '<rootDir>/apps/asklisa/web/jest.config.js'],
  transformIgnorePatterns: ['node_modules/(?!use-debounce|uuid)'],
  coverageProvider: 'v8',
  collectCoverage: true,
  coverageDirectory: 'coverage',
};
