import {ScrollView, StyleSheet, Text, View} from 'react-native';

function ScrollViewComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Scroll View Component</Text>
      <ScrollView
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        bounces={true}>
        {[...Array(20)].map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>{index + 1}</Text>
          </View>
        ))}
      </ScrollView>
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
  scrollView: {
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    padding: 20,
  },
  box: {
    height: 40,
    marginVertical: 10,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignContent: 'center',
  },
  boxText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ScrollViewComponent;
