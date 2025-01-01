import {StyleSheet, Text, View} from 'react-native';

const TabScreen2: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TabScreen 2</Text>
    </View>
  );
};

export default TabScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
