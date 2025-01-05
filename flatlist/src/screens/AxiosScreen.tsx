import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

// service file -> import
// axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
// interceptors
// request
api.interceptors.request.use(config => {
  console.log('Request Sent : ', config);
  return config;
});
// response
api.interceptors.response.use(response => {
  console.log('Response received : ', response);
  return response;
});

const AxiosScreen: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await api.get<Post[]>('/posts');
      if (response) {
        setData(response.data);
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

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>AxiosScreen</Text>
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

export default AxiosScreen;

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
  item: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#dadada',
    margin: 10,
    backgroundColor: 'pink',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});
