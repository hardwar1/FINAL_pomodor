import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import statisticReducer from "./statisticSlice";

const rootReducer = combineReducers({
  todoReducer,
  statisticReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer, 
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
