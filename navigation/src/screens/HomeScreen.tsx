import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamsList} from '../RootNavigator';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('StackDemo')}
        title="Stack Navigation Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
