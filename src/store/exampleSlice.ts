import { createSlice } from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
  name: "example",
  initialState: {
    text: "Hi, Control Alt React :)",
  },
  reducers: {
    updateString: (state, action) => {
      const text = action.payload;
      state.text = text;
    },
  },
});

export const { updateString } = exampleSlice.actions;

export const exampleReducer = exampleSlice.reducer;
