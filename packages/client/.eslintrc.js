const { resolve } = require('path');

module.exports = {
  // https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint
    // Needed to make the parser take into account 'vue' files
    extraFileExtensions: ['.vue'],
    parser: require.resolve('@typescript-eslint/parser'),
    // `project` and `tsconfigRootDir` needs to be re-defined in every package to pick up the correct paths
    project: resolve(__dirname, './tsconfig.eslint.json'),
    tsconfigRootDir: __dirname,
  },

  env: {
    browser: true,
    es2021: true,
    node: true,

    'vue/setup-compiler-macros': true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Only choose one of the lines below to choose desired strictness.
    // See https://eslint.vuejs.org/rules/#available-rules
    // 'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // Re-declaring this from the root .eslintrc.js to avoid conflicts with vue rules
    'prettier',
  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  // add your custom rules here
  rules: {
    // --- Base ESLint ---
    // Normally disabled in 'plugin:@typescript-eslint/eslint-recommended', but it doesn't apply to .vue files, so we disable it manually
    'no-redeclare': 'off',

    // --- TypeScript ---

    // --- Vue ---
    'vue/eqeqeq': 'error',
    'vue/block-lang': [
      'error',
      { script: { lang: 'ts' }, style: { lang: 'scss' } },
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/custom-event-name-casing': 'warn',
    'vue/html-comment-content-spacing': 'warn',
    'vue/html-comment-indent': 'warn',
    'vue/html-comment-content-newline': 'warn',
    'vue/no-deprecated-v-is': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'warn',
    'vue/no-static-inline-styles': 'warn',
    'vue/no-unsupported-features': ['error', { version: '3.2.0' }],
    'vue/no-unused-properties': ['warn', { groups: ['props', 'setup'] }],
    'vue/no-useless-v-bind': 'warn',
    'vue/padding-line-between-blocks': 'warn',
    'vue/require-emit-validator': 'error',
    'vue/require-name-property': 'error',
    'vue/v-for-delimiter-style': 'warn',
    'vue/v-on-event-hyphenation': 'error',
  },

  overrides: [
    // Pages are not used as components directly by developers, so they don't necessarily need to have multi word component names
    {
      files: ['src/pages/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
};
