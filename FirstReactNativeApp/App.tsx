import {ScrollView, StyleSheet, View} from 'react-native';
import Basic from './src/components/Basic';
import TextInputComponent from './src/components/TextInputComponent';
import ScrollViewComponent from './src/components/ScrollViewComponent';
import StylingDemo from './src/components/Styling';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scrollViewContent}>
        <Basic />
        <TextInputComponent />
        <ScrollViewComponent />
        <StylingDemo />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    alignContent: 'center',
  },
  scrollViewContent: {
    padding: 20,
  },
});

export default App;
