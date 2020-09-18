// SLL Priority Queue
// We want to create a Queue data structure that keeps its elements in sorted order,
//     so that when we call pop(), we get the first element in sorted order(rather than sequential order, like a regular FIFO queue).

// Create a PriQueue data structure by making changes to SLQueue and SLNode:
// A PriQNode class should be identical to SLNode, plus.pri, which is set by an additional
// argument passed to the constructor.The PriQueue push() method should accept both value and priority,
// and priority should be used to add the node at the right spot(instead of at queue’s end).



class SLNodePri{
    constructor(value,priority){
        this.val = value;
        this.pri = priority;
        this.next = null;
    }
}

class SLLPriority{
    constructor(){
        this.head = null;
    }
    print(){
        var runner = this.head;
        var output = "";
        while(runner){
            output += `|| Val: ${runner.val} Priority: ${runner.pri} ||`;
            if(runner.next){
                output += " => "
            }
            runner = runner.next;
        }
        console.log(output);
    }

    enqueue(value, pri) {
        var node = new SLNodePri(value,pri)
        if (!this.head) {
            this.head = node
            return this
        }
        if (node.pri < this.head.pri) {
            node.next = this.head
            this.head = node
            return this
        }
        var runner = this.head
        while (runner.next && runner.next.pri <= node.pri) {
            runner = runner.next
        }
        if (!runner.next) {
            runner.next = node
        } else {
            node.next = runner.next
            runner.next = node
        }
        return this
    }

    dequeue() {
        var runner = this.head
        while (runner.next.next !== null) {
            runner = runner.next
        }
        if (runner.next.next === null) {
            runner.next = null
        }
        return this
    }
}


var queue = new SLLPriority()
console.log(queue)
queue.enqueue(10, 2)    // runner    
queue.enqueue(5, 1)     // runner.next
queue.enqueue(6, 4)     // runner.next.next
queue.enqueue(4, 3)     // runner.next.next.next
queue.enqueue(7, 5)     // runner.next.next.next.next
queue.print()
queue.dequeue().print()