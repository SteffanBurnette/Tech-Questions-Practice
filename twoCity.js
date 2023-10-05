//Has to do with a hash table

//Given pairs of costs, pick whether to incur the first cost 
//or the second cost such that equal numbers of first and second 
//are selected while minimizing the cost.

//Key Things to ask:
//How many cities are there, You only have to care about each pair of cites
//Step 1- Send all people to city A
//Step 2- Calculate the difference between the two cities (b-a for a, b in costs)
//Step 3- swap out people from city A to city B where it makes the most econonmic sense.
//(Where the difference obtained in step 2 is bigger than the rest.)
//Step 4- Apply step 3 to only half the people
//############################################################################################
//Step 1- Create an array to store the differences between the first and second costs for each pair.
//Step 2- Calculate and store the difference for each pair in the array. 
//The difference represents how much you save by choosing the first cost over the second cost or vice versa.
//Step 3- Sort the array of differences in ascending order. 
//This will help you prioritize which pairs to select first.
//Step 4- Initialize variables to keep track of the count of first and 
//second costs you've selected and the total cost.
//Step 5- Iterate through the sorted array of differences. For each difference, 
//if the count of first and second costs is not equal, select the pair that corresponds
// to the current difference. Update the count and the total cost accordingly.
//Step 6- Continue this process until the count of first and second costs becomes equal.


function minimizeCost(costs) {
    
    const differences = []; //Represents how much you will be saving
    let firstCount = 0;
    let secondCount = 0;
    let totalCost = 0;
  
    // Calculate differences and populate the differences array
    //const [first, second] is used to extract the values from each pair in the costs array
    for (const [first, second] of costs) {
      const diff = first - second;
      differences.push({ diff, pair: [first, second] });//Pushing an object into the array that holds
      //the calculated difference and the pair that calculated said difference.
      //diff: It represents the difference between the first and second costs for a particular pair of costs.
      //pair: [first, second]: This part of the object stores the original pair of costs as an array.
    }
  
    // Sort the differences array in ascending order
    differences.sort((a, b) => a.diff - b.diff);
  
    // Iterate through the differences and select pairs
    for (const { diff, pair } of differences) {
      if (firstCount < costs.length / 2) {
        totalCost += pair[0];
        firstCount++;
      } else {
        totalCost += pair[1];
        secondCount++;
      }
    }
  
    return totalCost;
  }
  
  // Example usage
  const costs = [[1, 2], [3, 4], [5, 6]];
  const result = minimizeCost(costs);
  console.log(result); // Output: 10

  const cost2=[[34,56],[71,28],[76,89],[1,1000]];
  const result2 = minimizeCost(cost2);
  console.log(result2);
  