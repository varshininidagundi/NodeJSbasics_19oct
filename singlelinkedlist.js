
var head; 

class Node 
{
	constructor(val) 
	{
		this.data = val;
		this.next = null;
	}
}

// new Node at front 
function insert_at_start(new_data) 
{
	
	var new_node = new Node(new_data);
	new_node.next = head;
	head = new_node;
}


function insert_at_mid(prev_node,new_data) 
{
	if (prev_node == null) 
	{
		console.log("The given previous node cannot be null");
		return;
	}
	var new_node = new Node(new_data);
	new_node.next = prev_node.next;
	prev_node.next = new_node;
}

function insert_at_end(new_data) 
{
	var new_node = new Node(new_data);
	if (head == null) 
	{
		head = new Node(new_data);
		return;
	}
	new_node.next = null;
	var last = head;
	while (last.next != null)
		{last = last.next;}
	last.next = new_node;
	return;
}

/* This function prints  */
function printList() 
{
	var tnode = head;
	while (tnode != null) 
	{
		console.log("  "+tnode.data + " \r");
		tnode = tnode.next;
	}
    console.log("\n")
}


insert_at_end(6);
printList();

insert_at_start(7);
printList();

insert_at_start(1);
printList();

insert_at_end(4);
printList();

insert_at_mid(head.next.next, 8);
printList();


