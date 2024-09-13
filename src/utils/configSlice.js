import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "gpt",
  initialState: {
    lang : "en"
  },
  reducers: {
    changeLaguage: (state, action) => {
      state.lang =  action.payload;
    }
  },
});

export const { changeLaguage } = configSlice.actions;

export default configSlice.reducer;

