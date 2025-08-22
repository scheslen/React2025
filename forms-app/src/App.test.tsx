import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import {App} from "./App"

describe("App test", () => {
  test("something", () => {
    expect("").toBeFalsy();
  });

  it("renders a title", () => {
    render(
      <App />
    );
    expect(screen.getByText("React Forms")).toBeInTheDocument();
  });

  it("renders buttons", () => {
    render(<App />);
    const button1 = screen.getByRole("button", { name: "Uncontrolled Form" });
    const button2 = screen.getByRole("button", { name: "React Hook Form" });
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  })

});
