# 🧮 String Calculator — TDD Implementation in JavaScript

This project is a clean and test-driven implementation of a **String Calculator** built using **JavaScript** and **Jest**. It follows strict TDD (Test Driven Development) practices.

---

## ✅ Features

- Returns `0` for empty input
- Supports sum of single or multiple numbers
- Handles commas `,` and newlines `\n` as delimiters
- Custom delimiters: `//;\n1;2` ➝ `3`
- Delimiters of any length: `//[***]\n1***2***3` ➝ `6`
- Multiple delimiters: `//[*][%]\n1*2%3` ➝ `6`
- Multiple delimiters of any length: `//[***][%%]\n1***2%%3` ➝ `6`
- Ignores numbers > 1000
- Throws error for negative numbers, listing all negatives
- Throws error for invalid formats like `1,\n`


## 🔴 Initial Failing Test

![1 Test Fail](https://raw.githubusercontent.com/sahil-programmer/string-calculator-tdd-js-incubyte/main/screenshots/1redtest.png)

---

## 🧪 Run Tests

```bash
npm install
npm test


---


## 🔴 Initial Failing Test

![Initial Test Fail](https://raw.githubusercontent.com/sahil-programmer/string-calculator-tdd-js-incubyte/main/screenshots/1redtest.png)


