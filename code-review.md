# CODE REVIEW

```
function p(a, b, c) {
    let x = a * b;

    if (c == "regular") {
        console.log("Customer: " + c);
        console.log("Subtotal: " + x);
        let d = x * 0.05;
        let y = x - d;
        console.log("Discount: " + d);
        console.log("Total: " + y);
    }

    if (c == "premium") { /* repeated structure */ }
    if (c == "vip") { /* repeated structure */ }
}

p(5, 10000, "premium");
```

### Actual assumed code:

```
function p(a, b, c) {
    let x = a * b;

    if (c == "regular") {
        console.log("Customer: " + c);
        console.log("Subtotal: " + x);
        let d = x * 0.05;
        let y = x - d;
        console.log("Discount: " + d);
        console.log("Total: " + y);
    }

    if (c == "premium") {
         console.log("Customer: " + c);
        console.log("Subtotal: " + x);
        let d = x * 0.05;
        let y = x - d;
        console.log("Discount: " + d);
        console.log("Total: " + y);
    }
    if (c == "vip") {
         console.log("Customer: " + c);
        console.log("Subtotal: " + x);
        let d = x * 0.05;
        let y = x - d;
        console.log("Discount: " + d);
        console.log("Total: " + y);
    }
}

p(5, 10000, "premium");
```

## Problem 1

Given the actual assumed complete version of the code, there are lots of repititions, which violates the DRY Principle. Don't Repeat Yourself.

Anything similar which is reused more than two times should be put inside a reuseable function.

-- Suggested Solution:
The formular logic should be abstracted into one single function and can be resued severally.

## Problem 2

SRP Principle Violated.

From the actual assumed complete code, the function is in charge of delivering output, and calculating the required result.

-- Suggested Solution:
There should be two extra function, one for the business calculation logic, and for displaying the output.
