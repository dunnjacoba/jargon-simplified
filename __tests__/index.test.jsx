import { cleanup, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

afterAll(cleanup);

test("renders a button", () => {
  render(<Home />);
  const found = screen.findByRole("button");
  expect(found);
});
