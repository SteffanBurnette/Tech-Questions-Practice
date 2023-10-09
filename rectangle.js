//We use sqrt to find the dimensions of the area via the geometric mean

function calculateRectangleDimensions(area) {
    // Initialize the initial guess for L and W
    let L = Math.sqrt(area);
    let W = Math.sqrt(area);
  
    // Function to calculate the difference between L and W
    const calculateDifference = (length, width) => Math.abs(length - width);
  
    // Iterate and find dimensions with the minimum difference
    for (let i = 1; i <= Math.sqrt(area); i++) {
        //If i evenly divides area, it implies that area can be expressed as a
        // product of i and another number (the corresponding width).
      if (area % i === 0) {
        const currentL = i;
        const currentW = area / i;
        //If the difference between currentL and currentW is smaller than the difference 
        //between the previously stored L and W, it updates L and W with the current dimensions.
        if (calculateDifference(currentL, currentW) < calculateDifference(L, W)) {
          L = currentL;
          W = currentW;
        }
      }
    }
  
    //Returns the final length/width
    return { length: L, width: W };
  }
  
  // Example usage:
  const area = 30; // Replace with the desired area
  const dimensions = calculateRectangleDimensions(area);
  console.log(`Length: ${dimensions.length}, Width: ${dimensions.width}`);
  