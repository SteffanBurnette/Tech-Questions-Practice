//Write a function that takes a number and returns a list of its digits. 
//So for 2342 it should return [2,3,4,2].

function convert(num){
    const digs=num.toString().split('').map((char)=>parseInt(char, 10))
    return digs;
}

console.log(convert(1234));

/**
 * Other method
 * 
 * function convert(num) {
    const digs = [];
    while (num > 0) {
        const digit = num % 10;
        digs.unshift(digit);
        num = Math.floor(num / 10);   
    }
    return digs;
}
console.log(convert(1234567890));
 */