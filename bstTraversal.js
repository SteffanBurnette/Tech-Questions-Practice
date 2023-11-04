//Tree shell
class bst{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
   /*
function traverseTree(tree){
    if(!tree) return [];
    let result=[];
    function inorderTraversal(node,result){
        if(node===null)return ;
        inorderTraversal(node.left,result);
        result.push(node.val);
        inorderTraversal(node.right,result);
        }
        inorderTraversal(tree,result);
        return result;
        

}
*/

//Finds the smallest value in a binary search tree
function findMinVal(tree){
    //If the tree has no values return null
    if(tree===null){return null;}
    //Will iterate as long as the left child exists
    while (tree.left!==null){
        //Will continue going to the leftmost node until the smallest value is found
        tree = tree.left;
        }
        //Returns the value found
        return tree.val;
}

//Finds the largest value in a binary search tree
function findMaxVal(tree){
    //Base case to check if the tree contains values
    if(tree===null){return null;}
   //The loop will execute until the rightmost node is found, then it will return it
   //Which should be the hightest value since we are working with a binary search tree
    while(tree.right!==null){
        tree=tree.right;
        }

        //Returns the highest value found
        return tree.val;
    }

function findValue(tree, value){
    //Base cased to check if the tree has values
    if(tree===null){return false;}
    //While the tree has values the loop will execute
    while(tree){
        //If the value is less than the tree.val then it exists in the left branch
        if(value<tree.val){
            tree=tree.left;
        }
        //If the value is greater than the tree.val then it exists in the right branch
        else if(value>tree.val){
            tree=tree.right;
        }
        else{ //Returns true when the value equals tree.val
            return true;
        }
    }
    //returns false if the value is not found
    return false;
}

//Creates a tree and fills up its children nodes with other new trees
let tree = new bst(10);
tree.left = new bst(5);
tree.right = new bst(20);
tree.left.left = new bst(3);
tree.left.right = new bst(7);
tree.right.left = new bst(15);
tree.right.right = new bst(25);

console.log(findMinVal(tree));
console.log(findMaxVal(tree));
console.log(findValue(tree,15)); //Value exists
console.log(findValue(tree,152)); //Value does not exist
//console.log(traverseTree(tree));


const str="steffans";

function firstRepeat(str) {
    let obj = {};
  
    for (let char of str) {
      // Check if the char already exists in obj
      if (obj.hasOwnProperty(char)) {
        // If it does, increment its count
        obj[char]++;
      } else {
        // Otherwise, initialize it with a count of 1
        obj[char] = 1;
      }
    }
  
    return obj;
  }
  
  console.log(firstRepeat("hello")); // { h: 1, e: 1, l: 2, o: 1 }
  

console.log(firstRepeat(str));