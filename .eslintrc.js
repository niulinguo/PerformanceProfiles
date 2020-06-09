// https://www.jianshu.com/p/ad6784d028aa
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    '@react-native-community',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'eslint:recommended',
  ],
  ignorePatterns: ['jest.config.js'],
  plugins: ['prettier', 'jest', '@typescript-eslint'],
  rules: {
    // https://prettier.io/docs/en/integrating-with-linters.html
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        spaceBeforeFunctionParen: true,
      },
      {
        usePrettierrc: true,
      },
    ],
    // https://github.com/jest-community/eslint-plugin-jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  env: {
    'jest/globals': true,
  },
  settings: {
    jest: {
      version: 26,
    },
  },
};
