import { cleanup, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import HelloWorld from "../pages/helloworld";

afterAll(cleanup);

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

test("is on HelloWorld", async () => {
  render(<HelloWorld />);
  const button = await screen.findAllByRole("button");
  expect(button[0]).toHaveProperty("type", "button");
});

test("is on HelloWorld", async () => {
  render(<HelloWorld />);
  const button = await screen.findAllByRole("button");
  expect(button).toHaveLength(2);
});
