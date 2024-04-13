import { configureStore } from "@reduxjs/toolkit";
import currentSiteReducer from "./navbarSlice.ts";

const store = configureStore({
  reducer: {
    currentSite: currentSiteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
