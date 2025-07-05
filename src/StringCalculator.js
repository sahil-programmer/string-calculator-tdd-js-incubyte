class StringCalculator {
  add(numbers) {
    if (typeof numbers !== "string" || !numbers.trim()) return 0;
    let delimiter = ",";

    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEnd);
      numbers = numbers.substring(delimiterEnd + 1);
    }

    return numbers
      .replace(/\n/g, delimiter)
      .split(delimiter)
      .map((n) => Number(n.trim()))
      .reduce((sum, n) => sum + n, 0);
  }
}

module.exports = { StringCalculator };
