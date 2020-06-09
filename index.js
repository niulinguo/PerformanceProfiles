import {AppRegistry} from 'react-native';
// https://reactnavigation.org/docs/getting-started
import 'react-native-gesture-handler';

import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
