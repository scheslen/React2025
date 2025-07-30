import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Controls } from "./Controls";

describe("Control Component", () => {
  it("renders search input", () => {
    render(<Controls inputRequest="" onClick={() => {}} />);
    const inputSearch = document.querySelector(".search__input");
    expect(inputSearch).toBeInTheDocument();
  });

  it("renders search button", () => {
    render(<Controls inputRequest="" onClick={() => {}} />);
    const buttonSearch = screen.getByRole("button", { name: /search/i });
    expect(buttonSearch).toBeInTheDocument();
  });
});
