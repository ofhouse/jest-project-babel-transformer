module.exports = {
  roots: ['src'],
  transform: {
    '\\.ts?x$': ['babel-jest', { cwd: __dirname }],
  },
};
