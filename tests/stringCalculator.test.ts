import { StringCalculator } from "../src/stringCalculator";

describe("StringCalculator", () => {
  test("returns 0 for empty string", () => {
    const calc = new StringCalculator();
    expect(calc.add("")).toBe(0);
  });

  test("returns the same number if one number is provided", () => {
    const calc = new StringCalculator();
    expect(calc.add("5")).toBe(5);
  });

  test("returns sum of two comma-separated numbers", () => {
    const calc = new StringCalculator();
    expect(calc.add("1,2")).toBe(3);
  });
});
