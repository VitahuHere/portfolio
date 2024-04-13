import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "currentSite",
  initialState: {
    value: "home",
  },
  reducers: {
    setCurrentSite: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentSite } = navbarSlice.actions;

export default navbarSlice.reducer;
