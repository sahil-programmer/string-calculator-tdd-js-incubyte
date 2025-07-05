class StringCalculator {
  add(numbers) {
    if (!numbers || numbers.trim() === "") return 0;

    if (numbers.includes(",")) {
      const parts = numbers.split(",");
      let sum = 0;
      for (let i = 0; i < parts.length; i++) {
        sum += Number(parts[i].trim());
      }
      return sum;
    }

    return Number(numbers.trim());
  }
}

module.exports = { StringCalculator };
