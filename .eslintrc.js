const { resolve } = require('path');

module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  root: true,
  
  // .eslintignore can't be extended as the same way as .eslintrc.js, so we put the common patterns here
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.js', 'babel.config.js'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    // `project` and `tsconfigRootDir` needs to be re-defined in every package to pick up the correct paths
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint
    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    'eslint:recommended',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    'plugin:@typescript-eslint/recommended',
    // consider disabling this class of rules if linting takes too long
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // Needs to be after most rule sets to correctly override and avoid conflicts between ESLint and Prettier.
    // So, you might need to redeclare this in a package's .eslintrc.js if you are using a new rule set such as eslint-plugin-vue.
    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    'prettier',
  ],

  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
  ],

  globals: {
    process: 'readonly',
  },

  rules: {
    // --- Base ESLint ---
    curly: 'error',
    'no-else-return': ['warn', { allowElseIf: false }],
    eqeqeq: 'error',
    'no-alert': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      { allow: ['error'] },
    ],
    'prefer-const': 'warn',

    // --- TypeScript ---
    quotes: ['warn', 'single', { avoidEscape: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    // Tried out '@typescript-eslint/no-magic-numbers' rule, but the number of false positives is too high
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],

  },
};
