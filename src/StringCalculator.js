class StringCalculator {
  add(numbers) {
    const input = typeof numbers === "string" ? numbers.trim() : "";

    return input ? Number(input) : 0;
  }
}

module.exports = { StringCalculator };
