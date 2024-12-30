import {createStackNavigator} from '@react-navigation/stack';
import StackScreen1 from './StackScreen1';
import StackScreen2 from './StackScreen2';

export type StackParamsList = {
  'Screen 1': undefined;
  'Screen 2': {
    itemId: number;
  };
};

const Stack = createStackNavigator<StackParamsList>();
const StackNavigationDemo: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Stack Screen One'}}
        name="Screen 1"
        component={StackScreen1}
      />
      <Stack.Screen
        options={({route}) => ({
          title: `Item ${route.params.itemId}`,
        })}
        name="Screen 2"
        component={StackScreen2}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;
