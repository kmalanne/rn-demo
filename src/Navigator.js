import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Hello from './screens/Hello';
import PropState from './screens/PropState';
import Style from './screens/Style';
import WidthHeight from './screens/WidthHeight';
import FlexBox from './screens/FlexBox';
import ViewComponent from './screens/ViewComponent';
import TextComponent from './screens/TextComponent';
import ButtonComponent from './screens/ButtonComponent';
import ScrollViewComponent from './screens/ScrollViewComponent';
import ListComponent from './screens/ListComponent';
import Animation from './screens/Animation';
import Gesture from './screens/Gesture';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Hello: {
      screen: Hello,
    },
    PropState: {
      screen: PropState,
    },
    Style: {
      screen: Style,
    },
    WidthHeight: {
      screen: WidthHeight,
    },
    FlexBox: {
      screen: FlexBox,
    },
    ViewComponent: {
      screen: ViewComponent,
    },
    TextComponent: {
      screen: TextComponent,
    },
    ButtonComponent: {
      screen: ButtonComponent,
    },
    ScrollViewComponent: {
      screen: ScrollViewComponent,
    },
    ListComponent: {
      screen: ListComponent,
    },
    Animation: {
      screen: Animation,
    },
    Gesture: {
      screen: Gesture,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
