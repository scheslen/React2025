import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Page } from "./Page.tsx";

describe("Page Component", () => {
  it("renders Page", () => {
    render(<Page   pageNumber = {0}
          onClick={() => {}}
          />);
    expect(screen.getByText("Page")).toBeInTheDocument();
  });

  it("renders Page buttons", () => {
    render(<Page pageNumber = {0}
          onClick={() => {}} />);
    const buttonPrev = screen.getByRole("button", { name: /prev/i });
    const buttonNext = screen.getByRole("button", { name: /next/i });
    expect(buttonPrev).toBeInTheDocument();
    expect(buttonNext).toBeInTheDocument();
  });
});
