import {StyleSheet, ScrollView} from 'react-native';
import {Todo} from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
}) => {
  return (
    <ScrollView style={styles.container}>
      {todos.map(todo => (
        <TodoItem
          onDelete={() => onDeleteTodo(todo.id)}
          onToggle={() => onToggleTodo(todo.id)}
          onEdit={newText => onEditTodo(todo.id, newText)}
          key={todo.id}
          todo={todo}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoList;
