# Stacks and Queues
Stacks are Last on First off
Queues are First on First off

## Challenge
Create a Stack class that has a top property. It creates an empty Stack when instantiated.
This object should be aware of a default empty value assigned to top when the stack is created.
Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node.
Define a method called peek that does not take an argument and returns the node located on the top of the stack.
Create a Queue class that has a top property. It creates an empty queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node.
Define a method called peek that does not take an argument and returns the node located in the front of the stack.

## Approach & Efficiency
I used arrays and built in javascript functions, the other approach would be to use linked lists tracking a front and rear
O(1)

## API
new Stack() creates stack instance with top of null by default
stack.push() will add value to top of stack
stack.pop() removes and returns top item
stack.peek() returns last item 
new Queu() creates queue instance with front null by default
queue.enqueue() adds value to rear of queue
queue.dequeue() returns value from front of queue
queue.peek() returns next item from front of queue
