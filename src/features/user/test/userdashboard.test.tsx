import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import UserDashboard from "../components/UserDashboard";
import { act } from "react-dom/test-utils";

describe("<UserDashboard />", () => {
  it("renders a setttings tab", () => {
    render(<UserDashboard />);

    const settingsTab = screen.getByLabelText("User settings tab");

    expect(settingsTab).toBeVisible();
  });
  it("displays the User settings panel when tab is selected", () => {
    render(<UserDashboard />);

    const settingsTab = screen.getByLabelText("User settings tab");
    const settingsPanel = screen.getByLabelText("User settings panel");

    act(() => settingsTab.click());

    expect(settingsPanel).toBeVisible();
  });
  it("renders a profile tab", () => {
    render(<UserDashboard />);

    const profileTab = screen.getByLabelText("User profile tab");

    expect(profileTab).toBeVisible();
  });
  it("displays the User profile panel when tab is selected", () => {
    render(<UserDashboard />);

    const profileTab = screen.getByLabelText("User profile tab");
    const profilePanel = screen.getByLabelText("User profile panel");

    act(() => profileTab.click());

    expect(profilePanel).toBeVisible();
  });
  it("renders an uploads tab", () => {
    render(<UserDashboard />);

    const uploadsTab = screen.getByLabelText("User uploads tab");

    expect(uploadsTab).toBeVisible();
  });
  it("displays the User uploads panel when tab is selected", () => {
    render(<UserDashboard />);

    const uploadsTab = screen.getByLabelText("User uploads tab");
    const uploadsPanel = screen.getByLabelText("User uploads panel");

    act(() => uploadsTab.click());

    expect(uploadsPanel).toBeVisible();
  });
  describe("Profile Information", () => {
    it("displays full name", () => {
      render(<UserDashboard />);
      const profileTab = screen.getByLabelText("User profile tab");
      act(() => profileTab.click());

      const fullNameEl = screen.getByLabelText("full name");

      expect(fullNameEl).toBeVisible();
    });
    it("displays email address", () => {
      render(<UserDashboard />);
      const profileTab = screen.getByLabelText("User profile tab");
      act(() => profileTab.click());

      const emailEl = screen.getByLabelText("email address");

      expect(emailEl).toBeVisible();
    });

    it("displays phone number", () => {
      render(<UserDashboard />);
      const profileTab = screen.getByLabelText("User profile tab");
      act(() => profileTab.click());
      const phoneNumEl = screen.getByLabelText("phone number");

      expect(phoneNumEl).toBeVisible();
    });
    it("displays country", () => {
      render(<UserDashboard />);
      const profileTab = screen.getByLabelText("User profile tab");
      act(() => profileTab.click());

      const countryEl = screen.getByLabelText("country");

      expect(countryEl).toBeVisible();
    });
  });
});