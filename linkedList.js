class linkedList{
    constructor(val){
        this.val = val;
        this.next=null;
    }
}

class doublyLinkedList{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}


function traverseList(link){
    while(link.next){ //Will iterate until the end of the linkedlist
        console.log(link.val);
        link=link.next; //assigns the next linked list
    }

    return;
}


function reverseList(link){
    let prev=null, current=null, next=null;
    // Traverse the list and reverse the links
    while (link) {
        next = link.next;     // Store the next node
        current = link;       // Store the current node
        link.next = prev;     // Reverse the link
        prev = current;       // Move prev to the current node
        link = next;          // Move to the next node
    }

   //previous is the new head of the linked list, so you start from it
   return prev;
}

//function that inserts a value at the end of a linked list
function insertListVal(link, val){
    // Create a new node with the value provided.
    let newNode = new linkedList(val);

    // If the list is empty, then the new node is the head of the list.
    if (link === null) {
        return newNode;
    }

    // Iterate to the end of the list.
    while (link.next !== null) {
        link = link.next;
    }

    // Set the next property of the last node to the new node.
    link.next = newNode;
}


//Insert value between linked list
function insertBetweenList(link,val){
    let newNode= new linkedList(val);

    let next, before;
    let notSwapped=true;

    while(link){
        if(link.val)
    }

}


//Creates linked list structure
const link=new linkedList(5);
link.next=new linkedList(10);
link.next.next=new linkedList(20);

//Function call to traverse linked list
traverseList(link);
console.log(reverseList(link));  