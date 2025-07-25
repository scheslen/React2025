import { render, screen } from "@testing-library/react";
import { About } from "./About";
import { describe, it, expect } from "vitest";

describe("About Component", () => {
  it("renders About page", () => {
    render(<About />);
    expect(screen.getByText("Halina Antonik")).toBeInTheDocument();
  });

  it("renders RSS logo", () => {
    render(<About />);
    const logoRSS = document.querySelector(".rss-logo");
    expect(logoRSS).toBeInTheDocument();
   });
});
