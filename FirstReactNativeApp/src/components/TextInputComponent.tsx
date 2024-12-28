import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

function TextInputComponent() {
  const [value, setValue] = useState<string>('');
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Text Input Component</Text>
      <TextInput
        placeholder="Enter Text Here"
        value={value}
        style={styles.input}
        onChangeText={setValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    gap: 2,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginVertical: 2,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default TextInputComponent;
