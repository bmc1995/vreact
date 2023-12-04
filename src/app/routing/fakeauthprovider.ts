import { ROLES } from '../../features/user/utils/zod/roles';
import { IUser, login, logout } from '../redux/slices/userSlice';
import store from '../redux/store';
/**
 * Represents an authentication provider.
 */
interface AuthProvider {
  /**
   * Checks if the user is authenticated.
   * @returns A boolean indicating whether the user is authenticated.
   */
  isAuthenticated: () => boolean;

  /**
   * Retrieves the user information.
   * @returns The user information.
   */
  getUser(): IUser;

  /**
   * Signs in the user with the provided email and password.
   * @param email - The user's email.
   * @param password - The user's password.
   * @returns A promise that resolves when the sign-in process is complete.
   */
  signin({ email, password }: { email: string; password: string }): Promise<void>;

  /**
   * Signs out the user.
   * @returns A promise that resolves when the sign-out process is complete.
   */
  signout(): Promise<void>;
}

/**
 * A fake authentication provider that implements the AuthProvider interface.
 */
export const fakeAuthProvider: AuthProvider = {
  isAuthenticated: () => store.getState().user.isAuthenticated,
  getUser: () => store.getState().user,

  async signin({ email, password }: { email: string; password: string }) {
    await new Promise(r => setTimeout(r, 500)); // fake delay

    const fakeUser = { isAuthenticated: true, email, id: 'qwerty:)', role: ROLES.REGULAR };

    if (password === 'regularpassword') {
      store.dispatch(login(fakeUser));
    } else if (password === 'adminpassword') {
      store.dispatch(login({ ...fakeUser, role: ROLES.ADMIN }));
    } else {
      throw new Error('Invalid credentials');
    }
  },

  async signout() {
    await new Promise(r => setTimeout(r, 500)); // fake delay
    store.dispatch(logout());
  },
};
