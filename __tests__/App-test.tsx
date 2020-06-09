// 单元测试
// https://callstack.github.io/react-native-testing-library/

import 'react-native';
import React from 'react';
import App from '../src/App';
// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
// https://styled-components.com/docs/tooling#jest-integration
import 'jest-styled-components';
describe('test app', () => {
  it('renders correctly', async () => {
    await act(async () => {
      renderer.create(<App />);
    });
    expect(1).toEqual(1);
    // https://stackoverflow.com/questions/61695139/async-testing-react-navigation-5-in-jest-navigationcontainer-causes-console-err
    await act(async () => {});
  });
});
