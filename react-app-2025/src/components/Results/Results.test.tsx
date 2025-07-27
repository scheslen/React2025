import { render, screen } from "@testing-library/react";
import { Card } from "./Results";
import { describe, it, expect } from "vitest";
import { ICharacter } from "../../app/types";

describe("Card Component", () => {
  it("renders a Card", () => {
    const testItem: ICharacter = {
      alternateReality: false,
      bloodType: null,
      dayOfBirth: null,
      dayOfDeath: null,
      deceased: null,
      fictionalCharacter: false,
      gender: null,
      height: null,
      hologram: false,
      hologramActivationDate: null,
      hologramDateStatus: null,
      hologramStatus: null,
      maritalStatus: null,
      mirror: false,
      monthOfBirth: null,
      monthOfDeath: null,
      name: "A. Cooper",
      placeOfBirth: null,
      placeOfDeath: null,
      serialNumber: null,
      uid: "CHMA0000280373",
      weight: null,
      yearOfBirth: null,
      yearOfDeath: null,
    };
    render(<Card item={testItem} />);
    expect(screen.getByText("A. Cooper")).toBeInTheDocument();
  });
});
