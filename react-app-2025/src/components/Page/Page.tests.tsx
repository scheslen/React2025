import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Page } from "./Page.tsx";

describe("Page Component", () => {
  it("renders Page", () => {
    render(<Page   pageNumber = {0}
          onClick={() => {}}
          />);
    expect(screen.getByText("Page")).toBeInTheDocument();
  });

  it("renders Page buttons", async () => {
    render(<Page pageNumber = {0}
          onClick={() => {}} />);
    const buttonPrev = screen.getByRole("button", { name: /prev/i });
    const buttonNext = screen.getByRole("button", { name: /next/i });
    const pageValue = document.querySelector(".page__number");
    expect(buttonPrev).toBeInTheDocument();
    expect(buttonNext).toBeInTheDocument();
    expect(pageValue?.textContent).toEqual("0");


    await userEvent.click(buttonNext);

    expect(pageValue?.textContent).toEqual("1");

     await userEvent.click(buttonPrev);

    expect(pageValue?.textContent).toEqual("0");

});
});