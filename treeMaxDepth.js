//The depth of a node in a tree is the length of the path from the root to that node.
// The maximum depth of the tree is the length of the longest path from the root to any leaf node.
// You can find the maximum depth of a tree using depth-first search (DFS) or 
//breadth-first search (BFS).

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  //Starts with the root node
  function maxDepth(root) {
    if (root === null) {
      return 0; // Base case: An empty tree has a depth of 0.
    }
  
    // Recursively calculate the depth of the left and right subtrees.
    const leftDepth = maxDepth(root.left);
    //console.log(leftDepth);
    const rightDepth = maxDepth(root.right);
  
    // Return the maximum depth among the left and right subtrees, plus 1 for the current node.
    //Calculates the maximum of the depths of the left and right subtrees. 
    //This represents the longer path from the current node to one of its subtrees.
//Adding + 1 accounts for the depth of the current node itself. 
//So, this step combines the depths of the left and right subtrees and 
//adds 1 to find the maximum depth for the current node.
    return Math.max(leftDepth, rightDepth) + 1;
    //+ 1 is added for each node of the tree traversed.
    //.max returns the larger number of the two
  }
  
  // Example usage:
  
  // Create a simple binary tree:
  //       1
  //      / \
  //     2   3
  //    / \
  //   4   5
  
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  const depth = maxDepth(root);
  console.log("Maximum Depth of the Tree:", depth); // Output: 3
  