import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoScreen: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchTodos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await data.json();
    setTodos(result);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todos List Fetched from API</Text>
      <FlatList
        data={todos}
        renderItem={({item}: {item: Todo}) => (
          <TouchableOpacity
            style={[styles.card, item.completed && {backgroundColor: 'pink'}]}>
            <View style={styles.cardContent}>
              <Text
                style={[
                  styles.title,
                  item.completed && {textDecorationLine: 'line-through'},
                ]}>
                Title : {item.title}
              </Text>
              <Text style={styles.user}>User ID : {item.id}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={20}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: 10,
    margin: 10,
  },
  cardContent: {
    flex: 1,
    gap: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  user: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
