function calculateRectangleDimensions(area) {
    // Initialize the initial guess for L and W
    let L = Math.sqrt(area);
    let W = Math.sqrt(area);
  
    // Function to calculate the difference between L and W
    const calculateDifference = (length, width) => Math.abs(length - width);
  
    // Iterate and find dimensions with the minimum difference
    for (let i = 1; i <= Math.sqrt(area); i++) {
      if (area % i === 0) {
        const currentL = i;
        const currentW = area / i;
        if (calculateDifference(currentL, currentW) < calculateDifference(L, W)) {
          L = currentL;
          W = currentW;
        }
      }
    }
  
    return { length: L, width: W };
  }
  
  // Example usage:
  const area = 30; // Replace with the desired area
  const dimensions = calculateRectangleDimensions(area);
  console.log(`Length: ${dimensions.length}, Width: ${dimensions.width}`);
  