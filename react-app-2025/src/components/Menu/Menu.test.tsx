import { render } from "@testing-library/react";
import { Menu } from "./Menu";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Menu Component", () => {
  it("renders menu", () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>,
    );
    const nav = document.querySelector(".nav");
    expect(nav).toBeInTheDocument();
  });
});
