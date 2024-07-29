import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { render } from "@testing-library/react";

describe("Button", () => {
  beforeAll(() => {});
  beforeEach(() => {});
  afterEach(() => {});
  afterAll(() => {});

  test("renders Button component", () => {
    const text = "Click me";
    const { getByText } = render(<Button>{text}</Button>);
    const button = getByText(text);

    // screen.debug();

    expect(button).toBeInTheDocument();
  });

  test("render a disabled Button component", () => {
    const { getByRole } = render(<Button disabled>Click me</Button>);
    expect(getByRole("button")).toBeDisabled();
  });

  test("receives onClick event handler", () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>
    );

    const button = getByRole("button");
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(2);
    // expect(handleClick.mock.calls).toHaveLength(2);
  });
});
