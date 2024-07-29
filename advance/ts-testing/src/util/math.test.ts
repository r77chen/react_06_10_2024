import { multiply, sum } from "./math";

describe("Sum function", () => {
  test("can add positive numbers", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(1, 2)).toBe(3);
  });

  test("can add negative numbers", () => {
    expect(sum(-1, -10)).toBe(-11);
  });

  test("can add decimal numbers", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("Multiply function", () => {
  test("can multiply positive numbers", () => {
    expect(multiply(1, 1)).toBe(1);
    expect(multiply(1, 2)).toBe(2);
  });
});
