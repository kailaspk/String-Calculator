import { StringCalculator } from "../src/stringCalculator";

describe("StringCalculator", () => {
  test("returns 0 for empty string", () => {
    const calc = new StringCalculator();
    expect(calc.add("")).toBe(0);
  });
});
