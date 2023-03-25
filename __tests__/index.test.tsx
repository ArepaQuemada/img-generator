import Home from "@/pages";
import { render, screen } from "@testing-library/react";

describe("Testing Home", () => {
  test("Should render component", () => {
    render(<Home />);
  });
});
