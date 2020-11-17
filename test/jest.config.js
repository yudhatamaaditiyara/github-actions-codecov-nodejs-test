module.exports = {
  rootDir: '../',
  testEnvironment: 'node',
  coverageProvider: 'v8',
  coverageReporters: ['text', ['clover', {projectRoot: '../', file: 'clover.xml'}]],
  coverageDirectory: 'build/coverage/',
  collectCoverageFrom: ['src/**/*.js']
};