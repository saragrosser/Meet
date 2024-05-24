import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  beforeEach(() => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test("renders number of events text input", () => {
    const numberTextBox = screen.getByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("eventsNumber"); // Update to the actual class name
  });

  test("default value of the input field is 32", () => {
    const numberTextBox = screen.getByRole("textbox");
    expect(numberTextBox).toHaveValue("32"); // Assert value as a string
  });

  test("value changes accordingly when user types", async () => {
    const numberTextBox = screen.getByRole("textbox");
    await userEvent.clear(numberTextBox);
    await userEvent.type(numberTextBox, "10");
    expect(numberTextBox).toHaveValue("10"); // Assert value as a string
  });
});
