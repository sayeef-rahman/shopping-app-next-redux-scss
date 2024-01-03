import GreetingsPage from "@/pages/greeting";
import { render, screen } from "@testing-library/react";

describe("GreetingsPage", () => {
  it("GreetingsPage render success", () => {
    render(<GreetingsPage />);
    const element = screen.getByTestId("greeting-main");
    expect(element).toBeInTheDocument();
  });
});

test("sum test", () => {
  // it("Sum result", () => {
  expect(2 + 2).toBe(4);
  // });
});
