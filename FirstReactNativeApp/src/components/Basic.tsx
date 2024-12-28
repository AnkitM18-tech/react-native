import {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

function Basic() {
  const [count, setCount] = useState<number>(0);
  return (
    <View>
      {/* View Component */}
      <Text style={styles.headerText}>View Component</Text>
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>
      {/* Text Component */}
      <View style={styles.buttonContainer}>
        <Text style={styles.headerText}>Text Component</Text>
        <Text style={styles.myFirstText}>My First React Native App</Text>
        <Text style={styles.nestedText}>
          Text Components can be <Text style={styles.nestText}>nested</Text>
        </Text>
      </View>
      {/* Image Component */}
      <Text style={styles.headerText}>Image Component</Text>
      <View style={styles.boxContainer}>
        <Image
          style={styles.imageStyle}
          source={{uri: 'https://picsum.photos/200/300'}}
        />
        <Image
          style={styles.imageStyle}
          source={require('../../assets/doodle.jpg')}
        />
      </View>
      {/* Button Component */}
      <Text style={styles.headerText}>Button Component</Text>
      <View style={styles.buttonContainer}>
        <Button
          color="red"
          title="Click Me"
          onPress={() => setCount(c => c + 1)}
        />
        <Text>Count is {count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  redBox: {width: 50, height: 50, backgroundColor: 'red'},
  blueBox: {width: 50, height: 50, backgroundColor: 'blue'},
  greenBox: {width: 50, height: 50, backgroundColor: 'green'},
  myFirstText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 20,
  },
  nestedText: {
    textAlign: 'center',
  },
  nestText: {
    fontSize: 18,
    fontWeight: '500',
  },
  imageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});

export default Basic;
