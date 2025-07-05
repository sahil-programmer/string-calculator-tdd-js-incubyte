class StringCalculator {
  add(numbers) {
    if (typeof numbers !== "string" || !numbers.trim()) return 0;
    let input = numbers;

    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      const delimiter = numbers.substring(2, delimiterEndIndex);
      input = numbers
        .substring(delimiterEndIndex + 1)
        .split(delimiter)
        .join(",");
    }
    return input
      .replace(/\n/g, ",")
      .split(",")
      .map((n) => Number(n.trim()))
      .reduce((sum, n) => sum + n, 0);
  }
}

module.exports = { StringCalculator };
