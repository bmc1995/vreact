import "../styles/App.css";
import ErrorBoundary from "../features/error-boundary/components/ErrorBoundary";
import { Layout } from "../common/Layout/Layout";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { NetworkDetector } from "../features/network-detector/NetworkDetector";
import { SignUpPage } from "../features/auth/pages/SignUpPage";
import { ToastContainer } from "../common/notifications/ToastContainer";
import { LoginPage } from "../features/auth/pages/LoginPage";
import UserDashboard from "../features/user/components/UserDashboard";
function App() {
  return (
    <CssVarsProvider defaultMode={"system"}>
      <CssBaseline>
        <NetworkDetector>
          <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
            <Layout>
              <ToastContainer />
              <UserDashboard />
              {/* <LoginPage /> */}
              {/* <SignUpPage /> */}
            </Layout>
          </ErrorBoundary>
        </NetworkDetector>
      </CssBaseline>
    </CssVarsProvider>
  );
}

export default App;
