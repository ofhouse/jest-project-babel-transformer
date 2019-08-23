module.exports = {
  roots: ['src'],
  setupFilesAfterEnv: ['./src/jest.init.js'],
  transform: {
    '\\.js$': ['babel-jest', { cwd: __dirname }],
    '\\.html$': 'jest-raw-loader',
  },
};
