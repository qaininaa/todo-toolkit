import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [
      { id: 1, task: "mencuci piring", completed: false },
      { id: 2, task: "mengerjakan pr", completed: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
    checkCompleted: (state, action) => {
      const { id, completed } = action.payload;
      const task = state.data.find((e) => e.id == id);

      if (task) {
        task.completed = completed;
      }
    },
  },
});

export const { addTodo, checkCompleted } = todoSlice.actions;
export default todoSlice.reducer;
