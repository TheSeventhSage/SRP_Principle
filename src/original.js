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