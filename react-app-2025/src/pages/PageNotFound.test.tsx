import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PageNotFound } from "./PageNotFound.tsx";
import { BrowserRouter } from "react-router-dom";

describe("NotFoundPage", () => {
  it("renders NotFound page", () => {
    render(
      <BrowserRouter>
        <PageNotFound />;
      </BrowserRouter>,
    );
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });

  it("renders button", () => {
    render(
      <BrowserRouter>
        <PageNotFound />;
      </BrowserRouter>,
    );
    const button = screen.getByRole("button", { name: /Back to home/i });
    expect(button).toBeInTheDocument();
  });
});
