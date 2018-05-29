import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';

// Hacks for ignoring warnings begin
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);
console.ignoredYellowBox = ['Remote debugger']; // eslint-disable-line no-console
// Hacks end

AppRegistry.registerComponent('ReactNativeDemo', () => App);
