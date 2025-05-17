//Traverse a binary tree and determine if it is a binary search tree

class bst{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}



function isBST(node, min = null, max = null) {
    if (node == null) { //Returns true if the tree makes it to the final node
        return true;
    }
 
    //If the node is less than or equal to the left node of greater than or equal to the 
    //right node then it will return false since that is not a binary search tree
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
        return false;
    }

    //Recursively calls itself with the current nodes right child as the new node and sets the previous max value to be the current nodes    
    //If  none of the conditions are met, continue traversing through the left and right nodes
    return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
}


// Example usage:
let root = new bst(10);
root.left = new bst(5);
root.right = new bst(15);
root.left.left = new bst(2);
root.left.right = new bst(7);
root.right.right = new bst(20);

console.log(isBST(root)); // Output: true