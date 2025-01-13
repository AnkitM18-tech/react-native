import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import {AuthProvider} from './src/context/AuthContext';
import {RecipeProvider} from './src/context/RecipeContext';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <RecipeProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;
