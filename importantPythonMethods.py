#Binary Search Algorithm
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2  # Calculate the middle index

        if arr[mid] == target:
            return mid  # Element found, return its index
        elif arr[mid] < target:
            left = mid + 1  # Adjust the left boundary
        else:
            right = mid - 1  # Adjust the right boundary

    return -1  # Element not found

# Example usage:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 5
result = binary_search(arr, target)

if result != -1:
    print(f"Element {target} found at index {result}")
else:
    print(f"Element {target} not found in the array.")



"""
The binary_search function takes a sorted array arr and a target element target as input.

It initializes two pointers, left and right, which represent the search range within the array.

Inside the while loop, it calculates the middle index mid of the current search range.

It compares the element at the middle index (arr[mid]) with the target element. 
If they match, the function returns the index of the target element.

If the element at mid is less than the target, it adjusts the 
left boundary to search in the right half of the current range. If it's greater, 
it adjusts the right boundary to search in the left half.

The loop continues until the search range is empty (left > right), indicating that the 
element is not present in the array.

If the element is not found, the function returns -1.

Finally, the function is called with an example array and target element, and the result is printed.

This is a typical implementation of binary search, and it is an efficient algorithm 
for searching in sorted arrays with a time complexity of O(log n), 
where n is the number of elements in the array.

"""

#Python Methods

#Reverse string
original_string = "Hello, World!"
reversed_string = original_string[::-1]
print(reversed_string)


#Length of array
len()

#Sorting and Searching:

sorted() #Returns a new sorted list from an iterable.

sort() #Sorts a list in-place.

min() #Returns the minimum value from an iterable.

max() #Returns the maximum value from an iterable.

index() #Returns the index of the first occurrence of a specified value in a list.

in  #Checks if a value exists in a list or other iterable.


