import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface todo  {
  id: string;
  text: string;
  timesCount: number;
  completed: boolean;
};

type initialState = {
  todos: todo[];
  activeTaskId: string;
  noTodo: {
    id: 'no',
    text: 'Выйти на крыльцо, почесать своё ...',
    timesCount: number,
    completed: false
  }
};

const initialState: initialState = {
  todos: [],
  activeTaskId: '',
  noTodo: {
    id: 'no',
    text: 'Выйти на крыльцо, почесать своё ...',
    timesCount: 1,
    completed: false
  } 
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: (() => Math.random().toString())(),
        text: action.payload,
        completed: false,
        timesCount: 1,
      });
    },

    resetTodo(state) {
      state.todos = [];
    },

    addStoradgeTodo(state, action: PayloadAction<todo[]>) {
      state.todos = action.payload;
    },

    increment(state, action: PayloadAction<string>) {
      const thisTodo = state.todos.filter(item => item.id == action.payload)
      thisTodo[0].timesCount++
    },

    decrement(state, action: PayloadAction<string>) {
      const thisTodo = state.todos.filter(item => item.id == action.payload)
      if (thisTodo[0].timesCount > 0) thisTodo[0].timesCount--
    },

    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(item => item.id !== action.payload)
    },

    changeTodo(state, action: PayloadAction<{text: string, id: string}>) {
      for (const todo of state.todos) {
        if (todo.id == action.payload.id) {
          todo.text = action.payload.text;
        }
      }
    },

    setTaskId(state, action: PayloadAction<string>) {
      state.activeTaskId = action.payload;
    },
  },
});

// экспорт экшенов
export const {
  addTodo,
  resetTodo,
  addStoradgeTodo,
  removeTodo,
  changeTodo,
  increment,
  decrement,
  setTaskId,
} = todoSlice.actions;

// этот редюсер в стор подключить
export default todoSlice.reducer;
