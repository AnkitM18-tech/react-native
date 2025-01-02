import {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const TouchableScreen: React.FC = () => {
  const [twfCount, setTwfCount] = useState(0);
  const [toCount, setToCount] = useState(0);
  const [thCount, setThCount] = useState(0);
  const [pressCount, setPressCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TouchableScreen</Text>
      <TouchableWithoutFeedback onPress={() => setTwfCount(c => c + 1)}>
        <View style={styles.twfBtn}>
          <Text style={styles.btnText}>
            TouchableWithoutFeedback - Click Count = {twfCount}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => setToCount(c => c + 1)}>
        <View style={styles.twfBtn}>
          <Text style={styles.btnText}>
            TouchableOpacity - Click Count = {toCount}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableHighlight onPress={() => setThCount(c => c + 1)}>
        <View style={styles.twfBtn}>
          <Text style={styles.btnText}>
            TouchableHighlight - Click Count = {thCount}
          </Text>
        </View>
      </TouchableHighlight>
      <Pressable
        onPress={() => setPressCount(c => c + 1)}
        style={({pressed}) => [
          styles.twfBtn,
          {
            backgroundColor: pressed ? 'lightgreen' : 'pink',
          },
        ]}>
        {({pressed}) => (
          <Text style={styles.btnText}>
            {pressed ? 'Pressed' : 'Pressable - Click Count = ' + pressCount}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default TouchableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  twfBtn: {
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 5,
    margin: 10,
    minWidth: 250,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
