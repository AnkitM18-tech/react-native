import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Projects from './screens/Projects';
import TaskList from './screens/TaskList';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from './screens/TodoScreen';

export type TabParamsList = {
  Projects: undefined;
  Tasks: undefined;
};

const Tab = createBottomTabNavigator<TabParamsList>();

export type StackParamList = {
  Home: undefined;
  TodoScreen: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export const RootTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tasks" component={TaskList} />
      <Tab.Screen
        name="Projects"
        component={RootStackNavigation}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export const RootStackNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Projects}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TodoScreen"
        component={TodoScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
