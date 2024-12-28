import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

function TouchableComponent() {
  const [opacityCount, setOpacityCount] = useState(0);
  const [highlightCount, setHighlightCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Touchable Component</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setOpacityCount(opacityCount + 1)}>
        <Text style={styles.btnText}>Touchable Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.button}
        underlayColor={'#dc5478'}
        onPress={() => setHighlightCount(highlightCount + 1)}>
        <Text style={styles.btnText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    gap: 2,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginVertical: 2,
  },
  button: {
    backgroundColor: '#096dbe',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '900',
    color: '#fff',
  },
});

export default TouchableComponent;
