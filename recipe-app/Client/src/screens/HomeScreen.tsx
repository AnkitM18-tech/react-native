import {useContext} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/RootNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>;

interface HomeScreenProp {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProp> = ({navigation}) => {
  const {signOut} = useContext(AuthContext);
  const logoutUser = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await signOut();
          navigation.replace('Login');
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.input} placeholder="Search Recipes ..." />
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.iconBtnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutBtn} onPress={logoutUser}>
          <Text style={styles.logoutBtnText}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* render all recipes */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#007aff',
  },
  input: {
    flex: 1,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 15,
  },
  iconBtn: {
    width: 45,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#0aff32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBtnText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  logoutBtn: {
    padding: 12,
    backgroundColor: '#ff070a',
    marginLeft: 15,
    borderRadius: 20,
  },
  logoutBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
