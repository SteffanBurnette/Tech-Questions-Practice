/**
 * Write a function that rotates a list by k elements.
 *  For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. 
 * Try solving this without creating a copy of the list. 
 * How many swap or move operations do you need?
 */

let ary= [1,2,3,4,5,6];

function swapK(k, ary){
    let temp1=0;
    let temp2=0;
    let overflowK=0;
    for(let i=0; i<ary.length; i++){
        //if the position of the array plus the k value is passed the array length, then we will loop
        //the array again
        if(i+k>=ary.length){
            overflowK=(i+k)-ary.length
        }
        temp1=ary[i];
        temp2=ary[i+k];//adds the value in that position to the temp value
        ary[i+k]=temp1;
        ary[i]=temp2;
    }
}
console.log("This is the new array: "+swapK(2,ary));