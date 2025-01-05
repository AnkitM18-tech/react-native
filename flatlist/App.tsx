import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/RootNavigator';
import {ThemeProvider} from './src/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
