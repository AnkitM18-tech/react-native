import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Todo} from '../types';

interface TodoEditProps {
  todo: Todo;
  onSave: (newText: string) => void;
  onCancel: () => void;
}

const TodoEdit: React.FC<TodoEditProps> = ({todo, onSave, onCancel}) => {
  const [text, setText] = useState(todo.text);
  const handleSave = () => {
    if (text.trim()) {
      onSave(text.trim());
    }
  };
  return (
    <View style={styles.container}>
      <TextInput value={text} style={styles.input} onChangeText={setText} />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel} style={styles.cancelBtn}>
          <Text style={styles.btnText}>Cancel</Text>
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
  },
  input: {
    flex: 1,
    borderColor: '#cdcdcd',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
  saveBtn: {
    backgroundColor: '#00ff7a',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  cancelBtn: {
    backgroundColor: '#ff033b',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default TodoEdit;
