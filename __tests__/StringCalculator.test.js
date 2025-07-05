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
  test("returns sum of two comma-separated numbers", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2")).toBe(3);
  });
  test("returns the sum of multiple comma-separated numbers", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2,3,4")).toBe(10);
  });
});
