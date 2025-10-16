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

  test("returns sum of any amount of comma-separated numbers", () => {
    const calc = new StringCalculator();
    expect(calc.add("1,2,3,4,5")).toBe(15);
  });

  test("handles newline as delimiter along with comma", () => {
    const calc = new StringCalculator();
    expect(calc.add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter defined in first line", () => {
    const calc = new StringCalculator();
    expect(calc.add("//;\n1;2")).toBe(3);
  });
});
