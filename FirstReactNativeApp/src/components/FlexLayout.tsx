import {StyleSheet, Text, View} from 'react-native';

function FlexLayout() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Layout using Component</Text>
      <Text>Main Axis (Row)</Text>
      <View style={styles.rowContainer}>
        <View style={[styles.box, styles.redBox]}></View>
        <View style={[styles.box, styles.blueBox]}></View>
        <View style={[styles.box, styles.greenBox]}></View>
      </View>
      <Text>Cross Axis (Column)</Text>
      <View style={styles.columnContainer}>
        <View style={[styles.box, styles.redBox]}></View>
        <View style={[styles.box, styles.blueBox]}></View>
        <View style={[styles.box, styles.greenBox]}></View>
      </View>
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  columnContainer: {
    flexDirection: 'column',
    height: 200,
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  box: {
    width: 50,
    height: 50,
  },
  redBox: {
    backgroundColor: 'red',
  },
  blueBox: {
    backgroundColor: 'blue',
  },
  greenBox: {
    backgroundColor: 'green',
  },
});

export default FlexLayout;
