import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export const setupStore = () => {
  return configureStore({
    reducer: todoReducer,
  });
}

const rootReducer = combineReducers(
  todoReducer,
)

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
