function quickSort(arr) {
    if (arr.length <= 1) {
        // Base case: An array with 0 or 1 elements is already sorted.
        return arr;
    }

    // Choose the pivot as the last element
    const pivot = arr[arr.length - 1];
    // Partition the array into three subarrays: elements less than the pivot,
    // the pivot itself, and elements greater than the pivot.
    const less = [];
    const equal = [];
    const greater = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const element = arr[i];
        if (element < pivot) {
            less.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        }
    }

    // Recursively apply quickSort to the "less" and "greater" subarrays and combine them.
    return quickSort(less).concat(equal, [pivot], quickSort(greater));
}

// Example usage:
const unsortedArray = [7, 2, 5, 9, 1, 6];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 6, 7, 9]
