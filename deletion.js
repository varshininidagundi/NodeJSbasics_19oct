var head; 
class Node 
{
    constructor(val) 
    {
        this.data = val;
        this.next = null;
    }
}
 
function insertion(new_data)
{
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}
 
function deleteNode(position)
{   //if empty
    if (head == null){console.log("empty");
        return;}
    var temp = head;
    //if correct index
    if (position == 0) 
    {
        head = temp.next; 
        return;
    }
    for(i = 0; temp != null && i < position - 1; i++)
        temp = temp.next;
     
    //more than number of nodes
    if (temp == null || temp.next == null)
    return;
    var next = temp.next.next;
    temp.next = next; 
}
function printList()
{
    var tnode = head;
    while (tnode != null) 
    {
        console.log(tnode.data + " \r");
        tnode = tnode.next;
    }
    console.log("\n")
}

insertion(7);
insertion(1);
insertion(3);
insertion(2);
insertion(8);
insertion(9);
insertion(10);
 
console.log("Created Linked list is: <br/>");
printList();
 
deleteNode(6); 
 
console.log("<br/>Linked List after "+"Deletion at position 4: <br/>");
printList();
 