module.exports = {
  roots: ['src'],
  setupFilesAfterEnv: ['./src/jest.init.js'],
  transform: {
    '\\.js$': 'babel-jest',
    '\\.html$': 'jest-raw-loader',
  },
};
