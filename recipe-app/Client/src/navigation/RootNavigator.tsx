import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';

export type RootStackParamsList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  RecipeDetails: {recipeId: string};
};

const Stack = createNativeStackNavigator<RootStackParamsList>();
type NavigationProp = NativeStackNavigationProp<RootStackParamsList>;
const RootNavigator: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const {isAuthenticated, isLoading} = useContext(AuthContext);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }
    }
  }, [isLoading, isAuthenticated, navigation]);

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
