import {FlatList, StyleSheet, Text, View} from 'react-native';

// sample data
const FLAT_DATA = Array.from({length: 50}, (_, index) => ({
  id: index.toString(),
  title: `Data ${index + 1}`,
}));
const FlatListScreen: React.FC = () => {
  const renderData = ({item}: {item: {id: string; title: string}}) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FlatListScreen</Text>
      <FlatList
        ListHeaderComponent={<Text style={styles.listHeader}>Header</Text>}
        ListFooterComponent={<Text style={styles.listFooter}>Footer</Text>}
        data={FLAT_DATA}
        renderItem={renderData}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  headerText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    width: 80,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#dadada',
    margin: 10,
    backgroundColor: 'pink',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  listHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },
  listFooter: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});
