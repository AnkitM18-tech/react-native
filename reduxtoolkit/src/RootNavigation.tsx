import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Projects from './screens/Projects';
import TaskList from './screens/TaskList';

export type TabParamsList = {
  Projects: undefined;
  Tasks: undefined;
};

const Tab = createBottomTabNavigator<TabParamsList>();

const RootNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Projects" component={Projects} />
      <Tab.Screen name="Tasks" component={TaskList} />
    </Tab.Navigator>
  );
};

export default RootNavigation;
