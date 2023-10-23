var readline =require('readline-sync');

linkedlist_data=[]
linkedlist_link=[]
pointer=-1;
head_node=0;
max_size=10;
function insertion(){
    var element=readline.question('enter the first element you want enter into the linked list');
    pointer+=1;
    console.log(pointer)
    linkedlist_data[pointer]=element;
    let address=linkedlist_data.indexOf(element);
    linkedlist_link[pointer]=address;
    console.log("elements of linkedlist");
    console.log(linkedlist_data);
    console.log("\naddress of elements of linked list ");
    console.log(linkedlist_link);
}
function deleting(){
var index =readline.question("enter the index of element you want to delete");
let len=linkedlist_data.length;
if(index>=0 && index<len){
    for (let i = index; i < pointer; i++) {
        linkedlist_data[i] = linkedlist_data[i + 1];
        linkedlist_link[i] = linkedlist_link[i + 1];
    }
    pointer--;
}
else{
    console.log("invalid index choosen");
}
//linkedlist_data[pointer]=undefined;
//linkedlist_link[pointer]=undefined;
    console.log("elements of linkedlist");
    console.log(linkedlist_data);
    console.log("\naddress of elements of linked list ");

}
/*insertion();
insertion();
insertion();
deleting();*/


do {
    choice = readline.question("1 for enqueue\n2 for dequeue\n3 to exit: \n-------------");

    switch (choice) {
        case "1":
            insertion();
            break;
        case "2":
            deleting();
            break;
        case "3":
            console.log("Exiting the program.");
            break;
        default:
            console.log("Invalid choice. Please enter 1, 2, or 3.");
    }
} while (choice !== "3");





