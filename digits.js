/**
 * Write a function that takes a number and returns a list of its digits.
 * So for 2342 it should return [2,3,4,2].
 */

function numberToDigits(num) {
    // Convert the number to a string
    const numStr = num.toString();

    // Use the spread operator to split the string into an array of digits
    const digitsArray = [...numStr].map(Number);

    return digitsArray;
}

const number = 2342;
const result = numberToDigits(number);

console.log(result); // Output: [2, 3, 4, 2]
