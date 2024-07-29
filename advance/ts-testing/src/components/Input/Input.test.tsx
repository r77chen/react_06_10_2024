import { render } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  test("should render a label", () => {
    const { getByRole } = render(<Input label="First name" />);
    const label = getByRole("label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("First name");
  });

  test("should render an input element", () => {
    const { getByLabelText } = render(<Input label="Last name" />);
    const input = getByLabelText("Last name");
    expect(input).toBeInTheDocument();
  });

  test("should be a controlled input", () => {
    const value = "a@test.com";
    const { getByLabelText } = render(<Input label="Email" value={value} />);
    const input = getByLabelText("Email");
    expect(input).toHaveValue(value);
  });
});
