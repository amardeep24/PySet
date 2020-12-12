module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [
    "/node-modules/"
  ],
  verbose: true,
  coverageThreshold: {
    global:{
      branches: 100,
      functions: 100,
      lines: 100,
      statement: 100
    }
  }
};