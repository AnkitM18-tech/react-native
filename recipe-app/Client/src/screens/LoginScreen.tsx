import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamsList} from '../navigation/RootNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Login'
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}
const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
