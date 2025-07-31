import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Home } from "./Home";

describe("Home Component", () => {
  it("renders Home page", () => {
    render(<Home />);

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
