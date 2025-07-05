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

---

## 🧪 Run Tests

```bash
npm install
npm test

📁 Project Structure:

string-calculator-tdd/
├── __tests__/               
│   └── StringCalculator.test.js
├── src/
│   └── StringCalculator.js  
├── package.json
├── README.md

