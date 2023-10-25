function insertionSort(arr) {
    // Loop through the array, starting from the second element (index 1).
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted into the sorted part of the array.
        let currentElement = arr[i];
        
        // Start with the last element in the sorted part of the array.
        let j = i - 1;

        // Compare the current element with elements in the sorted part and shift them to the right
        // until the correct position for the current element is found.
        while (j >= 0 && currentElement < arr[j]) {
            arr[j + 1] = arr[j]; // Shift the greater element to the right.
            j--;
        }

        // Insert the current element into its correct sorted position.
        arr[j + 1] = currentElement;
    }
}

// Example usage
let myArray = [5, 2, 9, 3, 6];
insertionSort(myArray);
console.log(myArray); // Output: [2, 3, 5, 6, 9]
