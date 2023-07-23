import React from "react";
import { render } from "@testing-library/react";
import Gallery, { PhotoConfig } from "./Gallery";

const mockImages: PhotoConfig[] = [{ path: "mockPath", alt: "mockAlt" }];

describe("Gallery", () => {
  test("renders the Gallery component", () => {
    render(<Gallery images={mockImages} lazy={true} />);
  });
});
