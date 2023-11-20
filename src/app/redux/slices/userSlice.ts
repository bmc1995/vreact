import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IUser {
  isAuthenticated: boolean;
  id: string;
  email: string;
  firstName?: string;
  country?: string;
}

type LoginAction = {
  type: string;
  payload: IUser;
};

const initialState = { isAuthenticated: false, id: '', email: '', firstName: '', country: '' };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: LoginAction) => {
      return { ...state, ...action.payload };
    },
    logout: () => {
      return initialState;
    },
    update: (state, action: LoginAction) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user;
