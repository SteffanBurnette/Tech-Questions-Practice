/**
 * Write a function that merges two sorted lists into a new sorted list. 
 * [1,4,6],[2,3,5] → [1,2,3,4,5,6]. 
 * You can do this quicker than concatenating them followed by a sort.
 */

const ary1=[1,4,6];
const ary2=[2,3,5];

//Note that this function only works since they share the same length and we are comparing numbers.

function mergeSorted(ary1, ary2) {
    //The values needed for the new array
    const sortedAry = [];
    let i = 0;
    let j = 0;
  
    //Adds the values on order depending on the arrays lengths
    while (i < ary1.length && j < ary2.length) {
        //if the value in array1 is less than the value in array2 then it will be added first
        if (ary1[i] <= ary2[j]) {
            sortedAry.push(ary1[i]);
            i++;
        } else {
            sortedAry.push(ary2[j]);
            j++;         
            //te  sting
        }         
    }                            

    // If there are  remaining elements in ary1, add them to sortedAry
    while (i < ary1.length) { 
        sortedAry.push(ary1[i]);
        i++;
    }

    // If there are remaining elements in ary2, add them to sortedAry
    while (j < ary2.length) {
        sortedAry.push(ary2[j]);
        j++;
    }

    return sortedAry;
}


console.log("This is the sorted ary: "+ mergeSorted(ary1, ary2));