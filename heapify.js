function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        // Swap arr[i] and arr[largest]
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected subtree
        heapify(arr, n, largest);
    }
}

// Example usage:
const arr = [4, 10, 3, 5, 1];
const n = arr.length;

// Convert arr into a max-heap:
for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
}

console.log(arr); // Outputs a max-heap, e.g., [10, 5, 3, 4, 1]


/**The heapify function ensures that the subtree rooted at index i of array arr of size n satisfies the max-heap property.
To build the entire heap, we start from the last non-leaf node (which is at index Math.floor(n/2) - 1) and move upwards. Each node is passed to the heapify function to ensure it satisfies the heap property.
This process transforms the initial unsorted array into a valid max-heap. */