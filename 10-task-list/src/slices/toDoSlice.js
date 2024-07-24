import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDos",
  initialState: {
    list: [],
    filter: "all",
  },
  reducers: {
    addToDo: (state, action) => {
      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleToDo: (state, action) => {
      const toDo = state.list.find((toDo) => toDo.id === action.payload);

      if (toDo) {
        toDo.completed = !toDo.completed;
      }
    },
    removeToDo: (state, action) => {
      state.list = state.list.filter((toDo) => toDo.id !== action.payload);
    },
    filterToDo: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addToDo, toggleToDo, removeToDo, filterToDo } =
  toDoSlice.actions;
export default toDoSlice.reducer;
