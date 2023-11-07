import { afterEach, describe, expect, it, vi } from "vitest";
import ErrorBoundary from "../components/ErrorBoundary";
import { cleanup, render, screen } from "@testing-library/react";

const childText = "children rendered";
const fbackText = "fallback rendered";
const ThrowErr = () => {
  throw new Error("test");
};
const fback = <h1 data-testid={fbackText}>{fbackText}</h1>;
const child = (
  <div>
    <h1 data-testid={childText}>{childText}</h1>
  </div>
);

describe("<ErrorBoundary />", async () => {
  afterEach(() => {
    cleanup();
  });
  it("Displays children if there are no errors", async () => {
    render(<ErrorBoundary fallback={fback}>{child}</ErrorBoundary>);
    const boundary = await screen.findByTestId(childText);
    expect(boundary).toBeDefined();
  });
  it("Displays a fallback if an error is thrown", async () => {
    render(<ErrorBoundary fallback={fback}>{<ThrowErr />}</ErrorBoundary>);
    const boundary = await screen.findByTestId(fbackText);
    expect(boundary).toBeDefined();
  });
});
