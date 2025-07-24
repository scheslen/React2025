import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { describe, it, expect } from "vitest";

describe("Header Component", () => {
  it("renders a default header", () => {
    render(<Header />);
    expect(screen.getByText("Star Trek Movies")).toBeInTheDocument();
  });
});
