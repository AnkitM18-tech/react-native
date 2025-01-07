import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FlatListScreen from './screens/FlatListScreen';
import SectionListScreen from './screens/SectionListScreen';
import TouchableScreen from './screens/TouchableScreen';
import ModalScreen from './screens/ModalScreen';
import PullToRefreshScreen from './screens/PullToRefreshScreen';
import FetchScreen from './screens/FetchScreen';
import AxiosScreen from './screens/AxiosScreen';
import ThemeScreen from './screens/ThemeScreen';
import AnimationScreen from './screens/AnimationScreen';
import CombinedAnimationScreen from './screens/CombinedAnimationScreen';
import GestureAnimationScreen from './screens/GestureAnimationScreen';
import ReanimatedScreen from './screens/ReanimatedScreen';
import HomeScreen2 from './screens/HomeScreen2';
import ReanimatedTypes from './screens/ReanimatedTypes';
import ReanimatedGesturesScreen from './screens/ReanimatedGesturesScreen';

export type RootStackParamsList = {
  Home: undefined;
  Home2: undefined;
  FlatListScreen: undefined;
  SectionListScreen: undefined;
  TouchableScreen: undefined;
  ModalScreen: undefined;
  PullToRefreshScreen: undefined;
  FetchScreen: undefined;
  AxiosScreen: undefined;
  ThemeScreen: undefined;
  AnimationScreen: undefined;
  CombinedAnimationScreen: undefined;
  GestureAnimationScreen: undefined;
  ReanimatedScreen: undefined;
  ReanimatedTypesScreen: undefined;
  ReanimatedGesturesScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();
const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home2" component={HomeScreen2} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
      <Stack.Screen name="TouchableScreen" component={TouchableScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen name="FetchScreen" component={FetchScreen} />
      <Stack.Screen name="AxiosScreen" component={AxiosScreen} />
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
      <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
      <Stack.Screen
        name="CombinedAnimationScreen"
        component={CombinedAnimationScreen}
      />
      <Stack.Screen
        name="GestureAnimationScreen"
        component={GestureAnimationScreen}
      />
      <Stack.Screen name="ReanimatedScreen" component={ReanimatedScreen} />
      <Stack.Screen name="ReanimatedTypesScreen" component={ReanimatedTypes} />
      <Stack.Screen
        name="ReanimatedGesturesScreen"
        component={ReanimatedGesturesScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
