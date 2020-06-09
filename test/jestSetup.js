jest.mock('react-native-reanimated', () => {
  // https://github.com/react-navigation/react-navigation/issues/8151
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mock = require('react-native-reanimated/mock');
  const getValue = (node) => {
    if (typeof node === 'number') {
      return node;
    }
    return node && node.__value;
  };
  mock.default.cond = (a, b, c) => (getValue(a) ? b : c);
  mock.default.call = () => {};
  return mock;
});

// https://callstack.github.io/react-native-testing-library/docs/react-navigation
// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// https://github.com/getsentry/sentry-react-native/issues/689
jest.mock('@sentry/react-native', () => ({
  init: jest.fn(),
  addBreadcrumb: jest.fn(),
}));

// https://github.com/react-native-community/react-native-device-info/issues/159
jest.mock('react-native-device-info', () => {
  return {
    getUniqueId: jest.fn(),
    getReadableVersion: jest.fn(),
  };
});
