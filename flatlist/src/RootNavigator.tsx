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

export type RootStackParamsList = {
  Home: undefined;
  FlatListScreen: undefined;
  SectionListScreen: undefined;
  TouchableScreen: undefined;
  ModalScreen: undefined;
  PullToRefreshScreen: undefined;
  FetchScreen: undefined;
  AxiosScreen: undefined;
  ThemeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();
const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default RootNavigator;
