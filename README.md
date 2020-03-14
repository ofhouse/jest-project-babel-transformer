# Jest multi project runner with babel-jest [![Build status](https://travis-ci.org/ofhouse/jest-project-babel-transformer.svg?branch=master)](https://travis-ci.org/ofhouse/jest-project-babel-transformer)

This is an example of how to use the [`babel-jest`](https://www.npmjs.com/package/babel-jest) transformer in a monorepo where each package uses its own `.babelrc.js` configuration-file.
This is especially useful when the projects in your workspace do not share the same babel-preset or plugins but you still want to use the multi runner to run all test in your monorepo.

## Structure

The structure of this repository is as follows:

```sh
fixtures/
├── angular-js/        # Workspace 1
│   ├── .babelrc.js
│   ├── jest.config.js
│   └── package.json
└── react/             # Workspace 2
    ├── .babelrc.js
    ├── jest.config.js
    └── package.json
jest.config.js         # Workspace root
package.json
```

The tests can be run from the workspace root, which uses the jest projects config or individually from each package which uses the local jest config from each project.

## Setup & Test

```sh
# Install dependencies
yarn

# Run all tests from workspace root
yarn test

# Run tests in a workspace
cd fixtures/react
yarn test
```

## Author

<!-- prettier-ignore-start -->

| [<img src="https://avatars0.githubusercontent.com/u/472867?v=4" width="100px;"/><br /><sub><b>Felix Haus</b></sub>](https://github.com/ofhouse)<br /><sub>[Website](https://felix.house/) • [Twitter](https://twitter.com/ofhouse)</sub>|
| :---: |

<!-- prettier-ignore-end -->

## License

MIT - see [LICENSE](./LICENSE) for details.
