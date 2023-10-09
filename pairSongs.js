function numPairsDivisibleBy60(time) {
    const remainderCounts = {}; // Hash table to store counts of remainders
    let count = 0; // Initialize the count of pairs
  
    // Iterate through the song lengths
    for (const t of time) {
      const remainder = t % 60; // Calculate the remainder when dividing by 60
  
      // Calculate the complement (the remainder that makes the total divisible by 60)
      const complement = (60 - remainder) % 60;
  
      // Check if the complement exists in the hash table, and if so, add its count to the total count
      if (remainderCounts[complement]) {
        count += remainderCounts[complement];
      }
  
      // Update the hash table with the current remainder
      remainderCounts[remainder] = (remainderCounts[remainder] || 0) + 1;
    }
  
    return count; // Return the total count of pairs
  }
  
  // Example usage:
  const songLengths = [30, 20, 150, 100, 40];
  const result = numPairsDivisibleBy60(songLengths);
  console.log(result); // Output: 3 (Pairs: [30, 150], [20, 40], [100, 40])
  