import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  it("renders a default header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByText("Star Trek")).toBeInTheDocument();
  });
});
