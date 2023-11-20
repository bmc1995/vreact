import { login, logout } from '../redux/slices/userSlice';
import store, { RootState } from '../redux/store';

interface AuthProvider {
  isAuthenticated: () => boolean;
  getUser: () => RootState['user'];
  signin({ email, password }: { email: string; password: string }): Promise<void>;
  signout(): Promise<void>;
}

/**
 * This represents some generic auth provider API
 */
export const fakeAuthProvider: AuthProvider = {
  isAuthenticated: () => store.getState().user.isAuthenticated,
  getUser: () => store.getState().user,
  async signin({ email }: { email: string; password: string }) {
    await new Promise(r => setTimeout(r, 500)); // fake delay

    // if (password === 'supersecretpassword') {
    store.dispatch(login({ isAuthenticated: true, email, id: 'qwerty:)' }));
    // }
  },
  async signout() {
    await new Promise(r => setTimeout(r, 500)); // fake delay
    store.dispatch(logout());
  },
};
