

function reverseWords(s) {
    // Split the input string by spaces to get an array of words
    const words = s.split(' ');
  
    // Reverse the array of words
    const reversedWords = words.reverse();
  
    // Join the reversed words back into a string with spaces
    const reversedString = reversedWords.join(' ');
  
    return reversedString;
  }
  
  // Example usage:
  const inputString = "Hello World";
  const reversed = reverseWords(inputString);
  console.log(reversed); // Output: "World Hello"
  