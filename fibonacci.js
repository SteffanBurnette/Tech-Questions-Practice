/**
 * Write a function that computes the list of the first 100 Fibonacci numbers.
 *  The first two Fibonacci numbers are 1 and 1.
 *  The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number.
 *  The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
 */

//Start the array out with the first two fibonacci values
const fib=[1,1];

function Fibonacci(fib){
    let count=fib.length;
    //Two values that represents the values that will be added together
    for(let i=0,j=1;count<=100;i++, j++){
        fib.push(fib[i]+fib[j]);
        count++;

    
    }

    return "This is the fibonacci sequence: "+ fib;
}

console.log(Fibonacci(fib));