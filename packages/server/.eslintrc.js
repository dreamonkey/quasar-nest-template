const { resolve } = require('path');

module.exports = {
  parserOptions: {
    // `project` and `tsconfigRootDir` needs to be re-defined in every package to pick up the correct paths
    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
