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


🧪 Run Tests

npm install
npm test


## 🔴 All Test cases ScreenShots

❌ Test: Empty Input 

![1redtest](https://github.com/user-attachments/assets/fc2b4de9-8b45-4004-b223-9ddf3b2cd7b6)

✅ Test: Empty Input

![1greentest](https://github.com/user-attachments/assets/a44c62f3-9a84-4a7a-938a-778d43de29a2)

❌ Test: Single Number Input

![2redtest](https://github.com/user-attachments/assets/8be9dac3-ddae-4cc8-83c1-be52b17aedc1)

✅ Test: Single Number Input

![2greentest](https://github.com/user-attachments/assets/5089009d-4aae-4ead-ab6b-3a4c0113ac52)

❌ Test: Two Numbers Input

![3redtest](https://github.com/user-attachments/assets/4e9e4649-8660-4dae-acb2-4053c2701089)

Test: Two Numbers Input

![3greentest](https://github.com/user-attachments/assets/86595be2-f173-424c-8eda-134bf120f7c7)

❌ Test: Multiple Comma‑Separated Numbers

![4redtest](https://github.com/user-attachments/assets/eb39a956-0e1b-4d2b-8eff-fc9614f1fef8)

✅ Test: Multiple Comma‑Separated Numbers

![4_green_test](https://github.com/user-attachments/assets/f206eaae-2989-460c-b58e-43ee6ff0ba4d)

❌ Test: Newline and Comma as Delimiters "1\\n2,3"

![5_red_test](https://github.com/user-attachments/assets/fe737e20-c044-4b59-83ef-7bd9a970ef08)

✅ Test: Newline and Comma as Delimiters "1\\n2,3"

![5_green_test](https://github.com/user-attachments/assets/cb6fb48c-8654-4bbc-8d03-55291534d043)

❌ Test: Custom Delimiter //;\n1;2 

![6_red_test](https://github.com/user-attachments/assets/76ef6f06-7db6-4e62-8523-e457e89abed1)

✅ Test: Custom Delimiter //;\n1;2

![6greentest](https://github.com/user-attachments/assets/1e15f6a3-2772-428c-ab62-73332cbd3c08)

❌ Test: Negative Numbers

![7_red_test](https://github.com/user-attachments/assets/3ea07ea2-6d0c-4726-8a21-1f04cc5484a4)

✅ Test: Throws Error for Negative Numbers

![7_green_test](https://github.com/user-attachments/assets/5ab90cf8-2b49-41aa-bd0e-06c32f2daff3)

❌ Test: Ignores Numbers >1000

![8_red_test](https://github.com/user-attachments/assets/4e35d075-c856-4bc7-9e70-7de03dad90d8)

✅ Test: Ignores Numbers Greater than 1000

![8_green_test](https://github.com/user-attachments/assets/c99e7ebc-b9a5-4fa4-a94b-2e9fe483c848)

❌ Test: Long Delimiter (Failing)

![9_red_test](https://github.com/user-attachments/assets/d1a1eeaf-16f7-46b2-b68a-718eceefcef4)

✅ Test: Delimiter of Any Length — //[***]\n1***2***3

![9_green_test](https://github.com/user-attachments/assets/0b94d141-e7e1-41eb-a088-d7529533cf99)

❌ Test: Multiple Delimiters 

![10_red_test](https://github.com/user-attachments/assets/b75b32a5-f303-4481-96ff-8abf72947922)

✅ Test: Multiple Custom Delimiters — //[*][%]\n1*2%3

![10_green_test](https://github.com/user-attachments/assets/d6ac7e9b-e342-4f48-986e-ae11f72449b0)

❌ Test: Malformed Input "1,\\n"

![11_red_test](https://github.com/user-attachments/assets/5f868626-67a7-40dd-9a37-3e51e16a0b91)

✅ Test: Malformed Input "1,\\n" 

![11_green_test](https://github.com/user-attachments/assets/35066cbf-4652-4be3-8124-6a259a7f6fef)

❌ Test: Input Ends with a Delimiter "1,2,"

![12_red_test](https://github.com/user-attachments/assets/17208c48-5f26-4845-9d25-ac93c3132cf8)

✅ Test: Input Ends with a Delimiter "1,2,"

![12_green_test](https://github.com/user-attachments/assets/b3b75bef-8f08-4c0f-a94f-eb21c794c289)

❌ Test: Multiple Long Delimiters

![13_red_test](https://github.com/user-attachments/assets/fa23e52d-65c8-4cfe-bed5-62033559e8b3)

✅ Test: Multiple Long Delimiters — //[***][%%]\n1***2%%3

![13_green_test](https://github.com/user-attachments/assets/3afdc406-0f7b-430a-bc08-b33bd9c28f66)








