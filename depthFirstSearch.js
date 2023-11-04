
//Prefix Traversal
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function dfsRecursive(node) {
    if (node === null) {
        return;
    }
    console.log(node.value);  // Process node
    dfsRecursive(node.left);  // Explore left subtree
    dfsRecursive(node.right); // Explore right subtree
}

// Example usage:

const root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.left = new TreeNode('F');
root.right.right = new TreeNode('G');

dfsRecursive(root);  // Output: A B D E C F G
