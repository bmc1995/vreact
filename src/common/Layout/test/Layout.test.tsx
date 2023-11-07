import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Layout } from "../Layout";

describe("<Layout />", () => {
  beforeEach(async () => {
    vi.mock("../Header");
    render(
      <Layout>
        <h1 data-testid="layoutChild">child</h1>
      </Layout>
    );
  });
  it("renders child components", async () => {
    const layoutChild = await screen.findByTestId("layoutChild");
    expect(layoutChild).toBeInTheDocument();
  });
});
