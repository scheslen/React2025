import { render, screen } from "@testing-library/react";
import { MovieCard } from "./Results";
import { describe, it, expect } from "vitest";

describe("MovieCard Component", () => {
  it("renders a MovieCard", () => {
    const testMovie = {
      uid: "MOMA0000173722",
      title: "Star Trek",
      mainDirector: { uid: "", name: "Nicholas Meyer" },
      stardateFrom: 8130.3,
      stardateTo: 8130.3,
      titleBulgarian: "",
      titleCatalan: "",
      titleChineseTraditional: "",
      titleGerman: "",
      titleItalian: "",
      titleJapanese: "",
      titlePolish: "",
      titleRussian: "",
      titleSerbian: "",
      titleSpanish: "",
      usReleaseDate: "1982-06-04",
      yearFrom: 2100,
      yearTo: 2200,
    };
    render(<MovieCard movie={testMovie} />);
    expect(
      screen.getByText("1982-06-04 Nicholas Meyer ( years from 2100 to 2200 )"),
    ).toBeInTheDocument();
  });
});
