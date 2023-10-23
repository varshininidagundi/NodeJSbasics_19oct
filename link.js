class Link{
 constructor (val){
    this.data=val;
    this.next=null;
 }
}
const list =new Link(5);
list.next=new Link(56);
list.next.next=new Link(678);
console.log(list);