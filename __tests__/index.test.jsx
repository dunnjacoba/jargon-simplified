import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import HelloWorld from "../pages/helloworld";

afterAll(cleanup);

test("renders a heading", () => {
  render(<Home />);
  const heading = screen.findByTestId("paragraph-one");
  expect(heading);
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

test("clicked Click Me", () => {
  render(<HelloWorld />);
  const clickME = screen.getByText("Click Here");
  fireEvent.click(clickME);
});
