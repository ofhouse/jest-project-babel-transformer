# Jest Projet Babel transformer

Example of how to use the [`babel-jest`](https://www.npmjs.com/package/babel-jest) package in a monorepo where each package uses its own `babelrc.js` file.

## Structure

The Project structure is as follows:

```
fixtures/
├── angular-js/
│   ├── .babelrc.js
│   ├── jest.config.js
│   └── package.json
└── react/
    ├── .babelrc.js
    ├── jest.config.js
    └── package.json
jest.config.js
package.json
```

The tests can be run from the workspace root, which uses the jest projects config or individually from each package which uses the local jest config from each project.

## Setup & Test

```
yarn
yarn test
```
