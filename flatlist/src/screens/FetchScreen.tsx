import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

interface Post {
  id: number;
  title: string;
}

const FetchScreen = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const posts: Post[] = await response.json();
      if (posts) {
        setData(posts);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderPosts = ({item}: {item: Post}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FetchScreen</Text>
      {loading ? (
        <ActivityIndicator size={'large'} color="pink" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderPosts}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default FetchScreen;

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
    padding: 20,
    borderWidth: 1,
    borderColor: '#dadada',
    margin: 10,
    backgroundColor: 'pink',
    borderRadius: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});
