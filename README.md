# Project Purpose

The purpose of this project is in meeting with the requirements of the ICGF training framework of Tekhub Advanced Mentorship academy. It focused on studying the SRP principle in writing standard and scalable codes which can be properly used in building a project's codebase to be mainainable and scalable.

It maintains the standard and docs required as a proof of the study that was done and the documented process and results achieved.

# Setup/Run Instructions

To use or view the project, clone the repo as a local repo on Your local system.

The structure of the folder is as follows:

```
├── README.md
├── study-notes.md
├── code-review.md
├── reflection.md
├── testing.md
└── src/
    ├── original.js
    └── refactored.js
```

1. Simply open the html file in the src/ folder and inspect the results on Your browsers console.
2. Use the `testing.md` for the test cases, it contain the input cases, and expected outputs.
3. The `refactored.js` file is the fully refactored version of the `original.js` file. Which contains the exact refactored code with same working behaviour as the original script.

4. Each test case can be inputed in the function call:
   `processPayment(unitPrice, quantity, tier, percent)`
5. Inspect the output of the program in Your browsers console.

# Major Improvements

The major improvements implemented in the refactored file is simply as follows:

    1. Duplicated logic were broken down into separae functions.

    2. Functions were created in alignment with the SRP principle of handling only a `single` responsibility.

    3. Better namings were used with every identifier in the progam, which makes the purpose for each of them easily understandable.
