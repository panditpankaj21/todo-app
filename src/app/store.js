import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice.js"
import { loadState, saveState } from './localStorageUtils';

const preloadedState = loadState();

export const store = configureStore({
    reducer: todoReducer,
    preloadedState: preloadedState
})

store.subscribe(() => {
    saveState(store.getState());
});
  
