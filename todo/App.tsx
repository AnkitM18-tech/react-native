import {StyleSheet, View} from 'react-native';

function App(): React.JSX.Element {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
