module.exports = {
  rootDir: '../',
  testEnvironment: 'node',
  coverageProvider: 'v8',
  coverageReporters: ['clover', 'text'],
  coverageDirectory: 'build/coverage/',
  collectCoverageFrom: ['src/**/*.js']
};