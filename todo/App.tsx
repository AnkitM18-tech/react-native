import {StyleSheet, Text, View} from 'react-native';
import TodoInput from './src/components/TodoInput';
import {useState} from 'react';
import TodoList from './src/components/TodoList';
import {Todo} from './src/types';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodoList(
      todoList.map(todo => (todo.id === id ? {...todo, text: newText} : todo)),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>✅ Clever Note</Text>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
        todos={todoList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'blue',
  },
});

export default App;
