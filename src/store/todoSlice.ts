import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface todo {
  id: string;
  text: string;
  timesCount: number;
  completed: boolean;
}

type initialState = {
  todos: todo[];
  activeTaskId: string;
  noTodo: todo
};

const initialState: initialState = {
  todos: localStorage.todos ? JSON.parse(localStorage.todos) : [],
  // todos:  [],
  activeTaskId: "",
  noTodo: {
    id: "no",
    text: "Выйти на крыльцо, почесать своё ...",
    timesCount: 1,
    completed: false,
  },
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

      localStorage.todos = JSON.stringify(state.todos);
    },

    resetTodo(state) {
      state.todos = [];
      localStorage.todos = JSON.stringify([]);
    },

    increment(state, action: PayloadAction<string>) {
      const thisTodo = state.todos.filter((item) => item.id == action.payload);
      thisTodo[0].timesCount++;

      localStorage.todos = JSON.stringify(state.todos);
    },

    decrement(state, action: PayloadAction<string>) {
      const thisTodo = state.todos.filter((item) => item.id == action.payload);
      if (thisTodo[0].timesCount > 0) thisTodo[0].timesCount--;

      localStorage.todos = JSON.stringify(state.todos);
    },

    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);

      localStorage.todos = JSON.stringify(state.todos);
    },

    changeTodo(state, action: PayloadAction<{ text: string; id: string }>) {
      for (const todo of state.todos) {
        if (todo.id == action.payload.id) {
          todo.text = action.payload.text;

          localStorage.todos = JSON.stringify(state.todos);
        }
      }
    },

    setTaskId(state, action: PayloadAction<string>) {
      state.activeTaskId = action.payload;
      localStorage.todos = JSON.stringify(state.todos);
    },
  },
});

export const {
  addTodo,
  resetTodo,
  removeTodo,
  changeTodo,
  increment,
  decrement,
  setTaskId,
} = todoSlice.actions;

export default todoSlice.reducer;
