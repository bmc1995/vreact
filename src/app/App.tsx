import "../styles/App.css";
import ErrorBoundary from "../features/error-boundary/components/ErrorBoundary";
import { Layout } from "../common/Layout";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { NetworkDetector } from "../features/network-detector/NetworkDetector";
import { SignUpPage } from "../features/auth/pages/SignUpPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <CssVarsProvider defaultMode={"system"}>
      <CssBaseline>
        <NetworkDetector>
          <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
            <Layout>
              <SignUpPage />
            </Layout>
          </ErrorBoundary>
        </NetworkDetector>
      </CssBaseline>
    </CssVarsProvider>
  );
}

export default App;

// {
//   /* <div>
//   <a href="https://vitejs.dev" target="_blank">
//     <img src={viteLogo} className="logo" alt="Vite logo" />
//   </a>
//   <a href="https://react.dev" target="_blank">
//     <img
//       src={reactLogo}
//       className="logo react"
//       alt="React logo"
//     />
//   </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
//   <button
//     onClick={() =>
//       setCount((count) => {
//         return (count += 1);
//       })
//     }
//   >
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.tsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p> */
// }
