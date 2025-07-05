class StringCalculator {
  add(numbers) {
    if (typeof numbers !== "string" || !numbers.trim()) return 0;

    const normalized = numbers.replace(/\n/g, ",");
    return normalized
      .split(",")
      .map((n) => Number(n.trim()))
      .reduce((sum, n) => sum + n, 0);
  }
}

module.exports = { StringCalculator };
