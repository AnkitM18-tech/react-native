import {Button, StyleSheet, Text, View} from 'react-native';
import {StackParamsList} from './StackNavigationDemo';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type StackScreen2NavigationProps = StackNavigationProp<
  StackParamsList,
  'Screen 2'
>;

type StackScreen2RouteProp = RouteProp<StackParamsList, 'Screen 2'>;
const StackScreen2: React.FC = () => {
  const navigation = useNavigation<StackScreen2NavigationProps>();
  const route = useRoute<StackScreen2RouteProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Stack Screen 2</Text>
      <Text style={styles.headerText}>Item ID : {route.params.itemId}</Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Go to Stack Screen 1"
      />
    </View>
  );
};

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

export default StackScreen2;
