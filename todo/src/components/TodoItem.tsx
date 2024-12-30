import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Todo} from '../types';
import {useState} from 'react';
import TodoEdit from './TodoEdit';

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: (newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onToggle,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (newText: string) => {
    onEdit(newText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <TodoEdit
        todo={todo}
        onSave={handleEdit}
        onCancel={() => setIsEditing(false)}
      />
    );
  }
  return (
    <View
      style={[styles.container, todo?.completed && styles.containerBgChange]}>
      <TouchableOpacity style={styles.todoText} onPress={onToggle}>
        <Text style={[styles.text, todo?.completed && styles.completedText]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => setIsEditing(true)}
          style={styles.editBtn}
          disabled={todo.completed}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'lightgreen',
  },
  containerBgChange: {
    backgroundColor: 'pink',
  },
  todoText: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'green',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  editBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
  deleteBtn: {
    backgroundColor: '#ff033b',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default TodoItem;
