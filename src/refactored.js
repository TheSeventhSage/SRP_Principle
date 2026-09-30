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

function determineDiscount(tierPercent, subTotal) {
    return subTotal * (tierPercent * 1 / 100)
}

function outputLog(subject, value) {
    if (!(subject)) alert('Output subject missing/invalid');

    console.log(subject + ": " + value);
}

function valueCheck(unitPrice, quantity, tier, percent) {
    if (typeof unitPrice !== "number") {
        alert('Invalid price value. Must be a valid number')
        return false
    } else if (typeof quantity !== "number") {
        alert('Invalid quantity value. Must be a valid number')
        return false
    } else if (typeof percent !== "number") {
        alert('Invalid percent value. Must be a valid number')
        return false
    } else if (typeof tier !== "string" || !tier) {
        alert('Invalid or missing tier value. Must be a valid character set')
    }

    return true;
}

function paymentCalculation(subTotal, tierPercent) {
    let discountAmount = determineDiscount(tierPercent, subTotal);
    let total = subTotal - discountAmount;

    return { discountAmount, total };
}

function processPayment(unitPrice, quantity, tier, percent) {

    if (valueCheck(unitPrice, quantity, tier, percent) === false) return;

    try {
        let subTotal = unitPrice * quantity;

        outputLog('Customer', tier)
        outputLog('Subtotal', subTotal)

        let result = paymentCalculation(subTotal, percent);

        outputLog('Discount', result.discountAmount)
        outputLog('Total', result.total)
    } catch (error) {
        alert('Unknown error occurred. Try again, and ensure that you input the right values.')
    }
}

processPayment(20000, 4, 'regular', 15);