class StringCalculator {
  add(numbers) {
    if (!numbers || numbers.trim() === "") return 0;

    return parseInt(numbers, 10);
  }
}

module.exports = { StringCalculator };
