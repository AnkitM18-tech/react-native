import {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const INITIAL_DATA = Array.from({length: 20}, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));
const PullToRefreshScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(false);
  const renderItem = ({item}: {item: {id: string; title: string}}) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
  const loadMoreItems = () => {
    if (!loading) {
      setLoading(true);
      // load more items
      setTimeout(() => {
        const newItems = Array.from({length: 10}, (_, index) => ({
          id: (data.length + index).toString(),
          title: `Item ${data.length + index + 1}`,
        }));
        setData([...data, ...newItems]);
        setLoading(false);
      }, 2000);
    }
  };
  const handleOnRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(INITIAL_DATA);
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PullToRefreshScreen</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              style={styles.loader}
              size={'large'}
              color={'pink'}
            />
          ) : null
        }
      />
    </View>
  );
};

export default PullToRefreshScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    backgroundColor: 'pink',
    padding: 10,
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    minWidth: 200,
    borderWidth: 1,
    borderColor: '#dadada',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  loader: {marginVertical: 10},
});
