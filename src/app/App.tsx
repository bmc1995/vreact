import '../styles/App.css';
import ErrorBoundary from '../features/error-boundary/components/ErrorBoundary';
import { Layout } from '../common/Layout/Layout';
import { CssBaseline, CssVarsProvider } from '@mui/joy';
import { NetworkDetector } from '../features/network-detector/NetworkDetector';
// import { SignUpPage } from "../features/auth/pages/SignUpPage";
import { ToastContainer } from '../common/notifications/ToastContainer';

import UserDashboard from '../features/user/components/UserDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../features/auth/pages/LoginPage';
import { SignUpPage } from '../features/auth/pages/SignUpPage';

function App() {
  return (
    <CssVarsProvider defaultMode={'system'}>
      <CssBaseline>
        <NetworkDetector>
          <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
            <ToastContainer />
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path='/' element={<LoginPage />} />
                  <Route path='/signup' element={<SignUpPage />} />
                  <Route path='/dashboard' element={<UserDashboard />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ErrorBoundary>
        </NetworkDetector>
      </CssBaseline>
    </CssVarsProvider>
  );
}

export default App;
