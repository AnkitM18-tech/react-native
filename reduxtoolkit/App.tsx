import {NavigationContainer} from '@react-navigation/native';
import {RootTabNavigation} from './src/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootTabNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
