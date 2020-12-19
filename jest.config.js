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
      branches: 80,
      functions: 80,
      lines: 80,
      statement: 80
    }
  },
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.ts?$": "ts-jest"
  },
};