import {StyleSheet, Text, View} from 'react-native';

function StylingDemo() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginVertical: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Inline Styling Example
        </Text>
      </View>
      <View
        style={[styles.combinedStyle, {borderWidth: 2, borderColor: 'purple'}]}>
        <Text style={[styles.combinedText, {textDecorationLine: 'underline'}]}>
          Combined Text Style
        </Text>
        <Text style={[styles.combinedText, {color: 'red', fontWeight: '600'}]}>
          Combined Text Style With Different Color
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  combinedStyle: {
    backgroundColor: 'lightyellow',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  combinedText: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default StylingDemo;
