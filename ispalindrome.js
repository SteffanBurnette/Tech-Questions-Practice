const pal="aea";
const notPal="see";

console.log(pal[0]);



function testPal(pal) {
    //Adds both the i & j variable in the one statement so that you can loop through the word values in both ends
    //returns and exits out the loop if 
    for (let i = pal.length - 1, j = 0; i >= 0; i--, j++) {
        //If the front value is not equal to the back value then it is not a palindrome
        if (pal[i] !== pal[j]) {
            return pal + " is not a palindrome";
        }
    }
    return pal + " is a palindrome";
}

//Test cases
console.log(testPal(pal));
console.log(testPal(notPal));