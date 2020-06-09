module.exports = {
  preset: 'react-native',
  automock: false,
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './test/jestSetup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    // https://callstack.github.io/react-native-testing-library/docs/react-navigation
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
  // https://github.com/react-navigation/react-navigation/issues/7950
  // https://jestjs.io/docs/en/webpack
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
