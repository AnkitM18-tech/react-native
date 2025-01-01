import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StackNavigationDemo from './components/Stack/StackNavigationDemo';
import TabNavigationDemo from './components/Tab/TabNavigationDemo';

export type RootStackParamsList = {
  Home: undefined;
  StackDemo: undefined;
  TabDemo: undefined;
};

// create a stack navigator
const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackDemo" component={StackNavigationDemo} />
      <Stack.Screen name="TabDemo" component={TabNavigationDemo} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
