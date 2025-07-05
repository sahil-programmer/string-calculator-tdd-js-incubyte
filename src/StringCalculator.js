class StringCalculator {
  add(numbers) {
    if (typeof numbers !== "string" || !numbers.trim()) return 0;

    if (numbers.match(/,\n|\n,/)) {
      throw new Error("Invalid input format");
    }
    let delimiters = [","];
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      const delimiterRaw = numbers.substring(2, delimiterEnd);

      if (delimiterRaw.startsWith("[") && delimiterRaw.endsWith("]")) {
        delimiters = [...delimiterRaw.matchAll(/\[([^\]]+)\]/g)].map(
          (m) => m[1]
        );
      } else {
        delimiters = [delimiterRaw];
      }

      numbers = numbers.substring(delimiterEnd + 1);
    }

    const delimiterRegex = new RegExp(
      delimiters
        .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|") + "|\n"
    );

    const list = numbers.split(delimiterRegex).map((n) => Number(n.trim()));

    const negatives = list.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return list.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
  }
}

module.exports = { StringCalculator };
