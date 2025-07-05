class StringCalculator {
  add(numbers) {
    if (!numbers || numbers.trim() === "") return 0;

    if (numbers.includes(",")) {
      const [a, b] = numbers.split(",");
      return Number(a.trim()) + Number(b.trim());
    }

    return Number(numbers.trim());
  }
}

module.exports = { StringCalculator };
