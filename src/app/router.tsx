import { LoginPage } from '../features/auth/pages/LoginPage';
import { SignUpPage } from '../features/auth/pages/SignUpPage';
import UserDashboard from '../features/user/components/UserDashboard';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: 'signup',
    element: <SignUpPage />,
  },
  {
    path: '/dashboard',
    element: <UserDashboard />,
  },
]);
