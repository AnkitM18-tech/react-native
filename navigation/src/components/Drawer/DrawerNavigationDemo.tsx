import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {Text, View, StyleSheet, Button} from 'react-native';

type DrawerNavigationParams = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};

type DrawerScreen1Props = {
  navigation: DrawerNavigationProp<DrawerNavigationParams, 'DrawerScreen1'>;
};
type DrawerScreen2Props = {
  navigation: DrawerNavigationProp<DrawerNavigationParams, 'DrawerScreen2'>;
};
const DrawerScreen1: React.FC<DrawerScreen1Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Drawer Screen 1</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};
const DrawerScreen2: React.FC<DrawerScreen2Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Drawer Screen 2</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const Drawer = createDrawerNavigator<DrawerNavigationParams>();

const DrawerNavigationDemo = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
