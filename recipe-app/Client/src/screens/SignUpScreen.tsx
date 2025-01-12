import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamsList} from '../navigation/RootNavigator';
import {useContext, useState} from 'react';
import {AuthContext} from '../context/AuthContext';

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'SignUp'
>;

interface SignUpScreenProps {
  navigation: SignUpScreenNavigationProp;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp} = useContext(AuthContext);

  const signUpUser = async () => {
    if (email.trim() && password.trim()) {
      const success = await signUp(email, password);
      if (success) {
        // logic
      } else {
        Alert.alert(
          'Sign Up Failed',
          'Please try again with different credentials',
        );
      }
    } else {
      Alert.alert('Invalid Input', 'Both Email and Password are required');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign Up</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Enter Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.btn} onPress={signUpUser}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>
          Already have an account ?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Login')}>
            Log In
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  btn: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  linkText: {
    color: '#007aff',
    textDecorationLine: 'underline',
  },
});
