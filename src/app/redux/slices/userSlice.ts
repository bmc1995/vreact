import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: string;
  email: string;
  firstName?: string;
  country?: string;
}

type LoginAction = {
  type: string;
  payload: IUser;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: <IUser | null>null,
  },
  reducers: {
    login: (state, action: LoginAction) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    update: (state, action: LoginAction) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;
