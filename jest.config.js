module.exports = {
  testMatch: ['**/jest-tests/*.test.js'],
  transform: {'.*': '<rootDir>/node_modules/babel-jest'},
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@s-ui/abtesting-toggle/lib/|@babel/runtime|@s-ui/js)'
  ]
}
