import '../styles/App.css';
import ErrorBoundary from '../features/error-boundary/components/ErrorBoundary';
import { Layout } from '../common/Layout/Layout';
import { CssBaseline, CssVarsProvider } from '@mui/joy';
import { NetworkDetector } from '../features/network-detector/NetworkDetector';
import { ToastContainer } from '../common/notifications/ToastContainer';

function App({ children }: { children: React.ReactNode }) {
  return (
    <CssVarsProvider defaultMode={'system'}>
      <CssBaseline>
        <NetworkDetector>
          <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
            <Layout>
              <ToastContainer />
              {children}
            </Layout>
          </ErrorBoundary>
        </NetworkDetector>
      </CssBaseline>
    </CssVarsProvider>
  );
}

export default App;
