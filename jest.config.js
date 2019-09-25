module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>/src/components'],
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.js$": "babel-jest"
  },
  clearMocks: true,
  coverageDirectory: "coverage",
};