import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {
  addTask,
  fetchTasks,
  deleteTask,
  Task,
  toggleTask,
} from '../store/taskListSlice';
import Animated, {
  FadeInRight,
  FadeOutLeft,
  Layout,
} from 'react-native-reanimated';

const TaskList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const status = useSelector((state: RootState) => state.tasks.status);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchTasks());
  }, [status, dispatch]);

  const addNewTask = () => {
    if (newTaskTitle.trim()) {
      dispatch(
        addTask({
          title: newTaskTitle.trim(),
          completed: false,
        }),
      );
      setNewTaskTitle('');
      setIsModalVisible(false);
    }
  };

  const deleteTaskItem = (taskId: string) => {
    Alert.alert('Deleting the Task', 'Are you Sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteTask(taskId));
        },
      },
    ]);
  };

  const toggleTaskItem = (taskId: string) => {
    dispatch(toggleTask(taskId));
  };

  const renderTasks = ({item}: {item: Task}) => (
    <Animated.View
      entering={FadeInRight}
      exiting={FadeOutLeft}
      layout={Layout.springify()}>
      <TouchableOpacity
        onPress={() => toggleTaskItem(item.id)}
        style={[styles.task, item.completed && styles.completedTask]}>
        <Text
          style={[styles.taskText, item.completed && styles.completedTaskText]}>
          {item.title}
        </Text>
        <TouchableOpacity
          onPress={() => deleteTaskItem(item.id)}
          style={styles.closeBtn}
          disabled={item.completed}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {/* List of Tasks */}
      <FlatList
        data={tasks}
        renderItem={renderTasks}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setIsModalVisible(true)}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}>
        <KeyboardAvoidingView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add New Task</Text>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.btnText}>Close</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
              placeholder="Enter Task Title..."
              placeholderTextColor={'#999999'}
              autoFocus
            />
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={addNewTask}
                style={[styles.closeBtn, {backgroundColor: '#6200ee'}]}>
                <Text style={styles.btnText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  btn: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#6200ee',
    width: 100,
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  closeBtn: {
    backgroundColor: '#ff1e34',
    width: 100,
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    justifyContent: 'space-between',
    elevation: 2,
  },
  completedTask: {
    opacity: 0.7,
    backgroundColor: 'pink',
  },
  taskText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
  },
});
