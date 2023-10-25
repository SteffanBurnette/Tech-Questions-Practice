function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Element found, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Adjust the left boundary
        } else {
            right = mid - 1; // Adjust the right boundary
        }
    }

    return -1; // Element not found
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = binarySearch(array, target);

if (result !== -1) {
    console.log(`Element ${target} found at index ${result}`);
} else {
    console.log(`Element ${target} not found in the array.`);
}


/**
 * In this JavaScript binary search implementation:

The binarySearch function takes an array arr and a target value target as parameters.

It initializes two pointers, left and right, which represent the search range within the array.

Inside the while loop, it calculates the middle index mid of the current search range using the average of left and right.

It compares the element at the middle index arr[mid] with the target value. If they match, the function returns the index where the element was found.

If arr[mid] is less than the target, it adjusts the left boundary to search in the right half of the current range. If it's greater, it adjusts the right boundary to search in the left half.

The loop continues until the search range is empty (left > right), indicating that the element is not present in the array.

If the element is not found, the function returns -1.

Finally, the function is called with an example array and target value, and the result is logged to the console.

This JavaScript binary search algorithm efficiently searches for a target value in a sorted array, with a time complexity of O(log n), where n is the number of elements in the array.
 */