import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ROLES } from '../../../features/user/utils/zod/roles';

export interface IUser {
  isAuthenticated: boolean;
  role: `${ROLES}`;
  id: string;
  email: string;
  firstName?: string;
  country?: string;
}

const initialState: IUser | null = {
  isAuthenticated: false,
  id: '',
  email: '',
  firstName: '',
  country: '',
  role: ROLES.REGULAR,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    },
    logout: () => initialState,
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user;
