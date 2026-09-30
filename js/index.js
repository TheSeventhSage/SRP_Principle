/**
 * 
 * Algorithm:
 * 1. Break out  functions:
 *  a. Log func
 *  b. Calc. func.
 *  c. Discount func.
 * 
 * 2. Edit profits func. to calculate using the available funcs.
 * 3. Handle errors and edge cases gracefully. 
 */

// Discount Constants
const regular = 0.05;
const premium = 0.1;
const vip = 0.2;

function determineDiscount(customerTier, subTotal) {
    return subTotal * customerTier
}

function outputLog(subject, value) {
    console.log(subject + ": " + value);
}

function paymentCalculation(subTotal, customerTier) {
    let discountAmount = determineDiscount(subTotal * customerTier);
    let total = subTotal - discountAmount;

    return { discountAmount, total };
}

function payments(unitPrice, quantity) {
    let subTotal = unitPrice * quantity;


}


// function payments(unitPrice, quantity, customerTier) {
//     let price = unitPrice * quantity;

//     if (customerTier == "regular") {
//         console.log("Customer: " + customerTier);
//         console.log("Subtotal: " + x);
//         let d = x * 0.05;
//         let y = x - d;
//         console.log("Discount: " + d);
//         console.log("Total: " + y);
//     }

//     if (c == "premium") {
//         console.log("Customer: " + customerTier);
//         console.log("Subtotal: " + x);
//         let d = x * 0.05;
//         let y = x - d;
//         console.log("Discount: " + d);
//         console.log("Total: " + y);
//     }
//     if (c == "vip") {
//         console.log("Customer: " + customerTier);
//         console.log("Subtotal: " + x);
//         let d = x * 0.05;
//         let y = x - d;
//         console.log("Discount: " + d);
//         console.log("Total: " + y);
//     }
// }


p(5, 10000, "premium");