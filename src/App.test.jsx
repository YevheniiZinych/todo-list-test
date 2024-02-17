import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("Check title", () => {
  it("title should be in the main", () => {
    render(<App />);
    const element = screen.getByText(/todo list/i);
    expect(element).toBeInTheDocument();
  });
});
