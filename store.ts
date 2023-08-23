import { configureStore, createSlice } from "@reduxjs/toolkit";
import { isDoStatement } from "typescript";

const inView = createSlice({
  name: "inViewReducer",
  initialState: false,
  reducers: {
    setInView: (state, action) => {
      return action.payload;
    },
  },
});

export const { setInView } = inView.actions;

export default configureStore({ reducer: inView.reducer });
