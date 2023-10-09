//Find the third largest value in an array with possible repeats.
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// Create a Set from the array to automatically remove duplicates
const uniqueSet = new Set(arrayWithDuplicates);
// Convert the Set back to an array (if needed)
const arrayWithoutDuplicates = [...uniqueSet];
//console.log(arrayWithoutDuplicates); // Output: [1, 2, 3, 4, 5]


function thirdMax(ary) {
    // Removes duplicates
    ary = [...new Set(ary)];
    // Sort the array in ascending order
    ary.sort((a, b) => a - b);
  
    // Check the length of the unique sorted array
    if (ary.length < 3) {
      // If there are less than 3 unique elements, return the maximum
      return ary[ary.length - 1];
    } else {
      // Return the third largest element
      return ary[ary.length - 3];
    }
  }
  
  const test1 = [1, 4, 5, 6, 21, 45, 78, 99, 10];
  const test2=[0];
  const test3=[2,4];
  console.log("Test Case 1: " + thirdMax(test1));
  console.log("Test Case 2: " + thirdMax(test2));
  console.log("Test Case 3: " + thirdMax(test3));
  

/*
Comparison Logic: Inside the arrow function, a - b is the comparison logic. 
It subtracts b from a. This comparison logic determines the order of elements in the sorted array.
If a - b is negative, it means that a should come before b in the sorted array.
If a - b is positive, it means that b should come before a in the sorted array.
If a - b is zero, it means that a and b are considered equal in terms of sorting order.
So, by using a - b as the comparison logic, the sort() method will sort the array numbers in ascending order.
*/
