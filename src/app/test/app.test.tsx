// App.test.tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock child components and modules
    vi.mock("../features/network-detector/NetworkDetector", () => ({
      NetworkDetector: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="network-detector">{children}</div>
      ),
    }));
    vi.mock("react-redux");
    vi.mock("@mui/joy");

    vi.mock("../features/error-boundary/components/ErrorBoundary", () => ({
      ErrorBoundary: ({
        children,
        fallback,
      }: {
        children: React.ReactNode;
        fallback: React.ReactElement;
      }) => children,
    }));

    vi.mock("../common/Layout/Layout", () => ({
      Layout: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="layout">{children}</div>
      ),
    }));

    vi.mock("../common/notifications/ToastContainer", () => ({
      ToastContainer: () => <div data-testid="toast-container" />,
    }));

    vi.mock("../features/auth/pages/LoginPage", () => ({
      LoginPage: () => <div data-testid="login-page" />,
    }));

    vi.mock("../features/auth/pages/SignUpPage", () => ({
      SignUpPage: () => <div data-testid="sign-up-page" />,
    }));
  });

  it("renders the layout component", () => {
    render(<App />);
    screen.debug();
    const layout = screen.findByTestId("layout");
    expect(layout).toBeDefined();
  });

  it("renders the network detector", () => {
    render(<App />);
    const networkDetector = screen.findByTestId("network-detector");
    expect(networkDetector).toBeDefined();
  });

  it("renders the login page by default", () => {
    render(<App />);
    const loginPage = screen.findByTestId("login-page");
    expect(loginPage).toBeDefined();
  });

  it("does not render the sign-up page by default", () => {
    render(<App />);
    const signUpPage = screen.queryByTestId("sign-up-page");
    expect(signUpPage).toBeNull();
  });

  // Add more tests as needed...
});
