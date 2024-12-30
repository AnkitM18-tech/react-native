import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackParamsList} from './StackNavigationDemo';

type StackScreen1NavigationProps = StackNavigationProp<
  StackParamsList,
  'Screen 1'
>;
const StackScreen1: React.FC = () => {
  const navigation = useNavigation<StackScreen1NavigationProps>();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Stack Screen 1</Text>
      <Button
        onPress={() => navigation.navigate('Screen 2', {itemId: 100})}
        title="Go to Stack Screen 2"
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

export default StackScreen1;
