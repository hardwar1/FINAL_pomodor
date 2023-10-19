import { createSlice } from "@reduxjs/toolkit";

type todo = {
  id: string;
  text: string;
  completed: boolean;
}

interface IinitialState {
  todos: todo[] | [];
}

const initialState: IinitialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // экшены
    addTodo(state, action) {
      // state.todos.push({
      //   id: 'dsafa',
      //   text: 'dfs',
      //   completed: false,
      // });
    },
    removeTodo(state, action) { },
    toggleTodoComplete(state, action) { },
  }
});

// экспорт экшенов
export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

// этот редюсер в стор подключить
export default todoSlice.reducer; 