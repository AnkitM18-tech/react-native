import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const storedTasks = await AsyncStorage.getItem('tasks');
  const tasks = storedTasks ? JSON.parse(storedTasks) : [];
  return tasks;
});

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task: Omit<Task, 'id'>) => {
    const newTask = {...task, id: Date.now().toString()};
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    tasks.push(newTask);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    return newTask;
  },
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId: string, {getState}) => {
    const state = getState() as {tasks: TasksState};
    const updatedTask = state.tasks.tasks.filter(task => task.id !== taskId);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTask));

    return taskId;
  },
);

export const toggleTask = createAsyncThunk(
  'tasks/toggleTask',
  async (taskId: string, {getState}) => {
    const state = getState() as {tasks: TasksState};
    const task = state.tasks.tasks.find(task => task.id === taskId);
    if (task) {
      const updatedTask = {...task, completed: !task.completed};
      const updatedTasks = state.tasks.tasks.map(task =>
        task.id === taskId ? updatedTask : task,
      );
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTask;
    }
    throw new Error('Task not found');
  },
);

const taskListSlice = createSlice({
  name: 'tasklist',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        (state.status = 'failed'), (state.error = action.error.message || null);
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      })
      .addCase(toggleTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.tasks.findIndex(
          task => task.id === action.payload.id,
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      });
  },
});

export default taskListSlice.reducer;
