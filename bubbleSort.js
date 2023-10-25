
function bubble(arr){
let temp=0;
let counter=0;
//If the array only has two elements we swap those two elements
if(arr.length>=2){
    if(arr[0]<arr[1]){
        temp=arr[1];
        arr[1]=arr[0];
        arr[0]=temp;
    }
}

for(let i=0, j=1; i<arr.length; i++, j++ ){
    // If current element is greater than next one then swap them
    if (arr[i] > arr[j]) {
       temp = arr[i]; //larger element
       arr[i] = arr[j]; //smaller element
       arr[j] = temp; //larger element
}

}
}



///PROPER BUBBLESORT ALGORITHM
function bubbleSort(arr) {
    const n = arr.length; // Get the number of elements in the array.
    let swapped; // A flag to track whether any swaps were made in a pass.

    do {
        swapped = false; // Initialize the swapped flag as false for each pass.
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // If the current element is greater than the next element, they are out of order.
                // Swap the elements to put them in the correct order.
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; // Set the swapped flag to true because a swap was made.
            }
        }
    } while (swapped); // Continue making passes until no swaps are made.

    return arr; // Return the sorted array.
}
