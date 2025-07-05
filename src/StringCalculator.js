class StringCalculator {
  add(numbers) {
    return numbers?.trim() === "" ? 0 : null;
  }
}

module.exports = { StringCalculator };
