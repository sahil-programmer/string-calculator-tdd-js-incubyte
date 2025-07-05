const { StringCalculator } = require("../src/StringCalculator");

describe("StringCalculator", () => {
  test("should return 0 for empty input", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
  });
  test("returns the number itself when only one number is provided", () => {
    const calc = new StringCalculator();
    expect(calc.add("7")).toBe(7);
  });
});
