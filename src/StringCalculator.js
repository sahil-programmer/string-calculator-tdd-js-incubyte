class StringCalculator {
  add(numbers) {
    if (typeof numbers !== "string" || !numbers.trim()) return 0;
    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      const delimiterRaw = numbers.substring(2, delimiterEnd);
      delimiter =
        delimiterRaw.startsWith("[") && delimiterRaw.endsWith("]")
          ? delimiterRaw.slice(1, -1)
          : delimiterRaw;
      numbers = numbers.substring(delimiterEnd + 1);
    }

    const list = numbers
      .replace(/\n/g, delimiter)
      .split(delimiter)
      .map((n) => Number(n.trim()));

    const negatives = list.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return list.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
  }
}

module.exports = { StringCalculator };
