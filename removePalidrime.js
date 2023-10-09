
//Function that checks if a string is a palindrome or not
function isPalindrome(s) {
    // Helper function to check if a string is a palindrome
    return s === s.split('').reverse().join('');
  }
  
  
  function removePalindromeSubstr(s) {
    if (s.length === 0) {
      return 0; // Base case: an empty string doesn't need any steps
    }
  
    if (isPalindrome(s)) {
      return 1; // If the string is already a palindrome, delete it in one step
    }
  
    // Try deleting a palindromic substring from the start or end
    const startRemoved = removePalindromeSubstr(s.substring(1));
    const endRemoved = removePalindromeSubstr(s.substring(0, s.length - 1));
  
    // Return the minimum steps required
    return 1 + Math.min(startRemoved, endRemoved);
  }
  
  // Example usage:
  const inputString = "abbaba";
  const steps = removePalindromeSubstr(inputString);
  console.log("Smallest number of steps:", steps); // Output: 2
  