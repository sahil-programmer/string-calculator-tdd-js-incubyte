const { StringCalculator } = require("../src/StringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  describe("Basic inputs", () => {
    test("returns 0 for empty input", () => {
      expect(calculator.add("")).toBe(0);
    });

    test("returns the number itself when only one number is provided", () => {
      expect(calculator.add("7")).toBe(7);
    });

    test("returns sum of two comma-separated numbers", () => {
      expect(calculator.add("1,2")).toBe(3);
    });

    test("returns sum of multiple comma-separated numbers", () => {
      expect(calculator.add("1,2,3,4")).toBe(10);
    });

    test("returns sum with newline and comma as delimiters", () => {
      expect(calculator.add("1\n2,3")).toBe(6);
    });
  });

  describe("Error handling", () => {
    test('throws error for malformed input like "1,\\n"', () => {
      expect(() => calculator.add("1,\n")).toThrow("Invalid input format");
    });

    test("throws error when string ends with a delimiter", () => {
      expect(() => calculator.add("1,2,")).toThrow("Invalid input format");
    });

    test("throws exception when negative numbers are present", () => {
      expect(() => calculator.add("1,-2,3,-5")).toThrow(
        "negative numbers not allowed: -2,-5"
      );
    });
  });

  describe("Custom delimiters", () => {
    test("returns sum when custom delimiter is defined like //;\\n1;2", () => {
      expect(calculator.add("//;\n1;2")).toBe(3);
    });

    test("should return sum with custom delimiter of any length", () => {
      expect(calculator.add("//[***]\n1***2***3")).toBe(6);
    });

    test("returns sum when multiple custom delimiters are used like //[*][%]\\n1*2%3", () => {
      expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
    });

    test("returns sum when multiple long delimiters are used like //[***][%%]\\n1***2%%3", () => {
      expect(calculator.add("//[***][%%]\n1***2%%3")).toBe(6);
    });
  });

  describe("Other conditions", () => {
    test("ignores numbers greater than 1000", () => {
      expect(calculator.add("2,1001")).toBe(2);
    });
  });
});
