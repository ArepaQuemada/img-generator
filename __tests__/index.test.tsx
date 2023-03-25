import Home from "@/pages";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("Testing Home", () => {
  test("Should render component", () => {
    render(<Home />);
  });
});
