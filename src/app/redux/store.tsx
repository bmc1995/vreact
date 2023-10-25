// TODO
import { configureStore } from "@reduxjs/toolkit";
import ToastReducer from "./slices/toastSlice";
import UserReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    toast: ToastReducer,
    user: UserReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
