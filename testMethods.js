const ary=[0,90,10,275,972,28237];
//This line of code sorts the array ary in ascending order.
console.log(ary.sort((a,b)=>a-b));


let hpy="happy";
//Reverses the string
console.log(hpy.split('').reverse().join(''));


//Converts array into an object but does not remove dupes
const ary2=[1,1,3,4,5,6,6,7];
const ary3=ary2.entries();

for(x of ary3){
    console.log(x+"\t");
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item * 10));

//Alternative to console.log
let log= console.log;
log("This is cool!!");

//How to define a tree in javascript
class bst{

    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

let root = new bst(10);        // creates a new node with value 10
root.left = new bst(5);        // creates a new left child node with value 5
root.right = new bst(15);      // creates a new right child node with value 15
root.left.left = new bst(2);   // creates a new left child node (of the left child of the root) with value 2



//Doubly Linked List
class doubleLinkedList{
    constructor(val){
        this.val=val;
        this.prev=null;
        this.next=null;
    }
}

let node1 = new doubleLinkedList(10);     // creates a new node with value 10
let node2 = new doubleLinkedList(20);     // creates a new node with value 20

node1.next = node2;      // node1's next pointer points to node2
node2.prev = node1;      // node2's previous pointer points to node1

//Removes dupes converts array into set
arrays=[1.2,2,3,4,5,5,6,7,2,1,4,3,8,9,11];
const testSort=arrays.sort((a,b)=>a-b);
const testSet= [...new Set(arrays)];
log(testSet);
log(testSort);