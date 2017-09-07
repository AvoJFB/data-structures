# Data Structures

## Stack
To create a new empty stack use the following syntax.
```javascript
const stack = new Stack();
```

To create a new stack with initial value use the following syntax.
```javascript
const stack = new Stack(['a', 'b', 'c', 'd']);
```
Note that argument for creating a stack with initial value can be only array where the first item is the bottom of the stack and the last item is the top of the stack.

### Methods
#### push
Pushes an item to the top of the stack.
```javascript
const stack = new Stack(['a','b']);
stack.push('c'); // Stack: ['a','b','c']
```

#### pop
Removes an item from the top of the stack and returns it.
```javascript
const stack = new Stack(['a','b','c']);
stack.pop(); // Stack: ['a','b'] | Returns 'c'
```

#### peek
Returns an item from the top of the stack.
```javascript
const stack = new Stack(['a','b','c']);
stack.peek(); // Stack: ['a','b','c'] | Returns 'c'
```

#### count
Returns the length of the stack.
```javascript
const stack = new Stack(['a','b','c']);
stack.count(); // Stack: ['a','b','c'] | Returns 3
```

## Queue
To create a new empty queue use the following syntax.
```javascript
const queue = new Queue();
```

To create a new queue with initial value use the following syntax.
```javascript
const queue = new Queue(['a', 'b', 'c', 'd']);
```
Note that argument for creating a queue with initial value can be only array where the first item is the bottom of the queue and the last item is the top of the queue.

### Methods
#### enqueue
Pushes an item to the top of the queue.
```javascript
const queue = new Queue(['a','b']);
stack.enqueue('c'); // Queue: ['a','b','c']
```

#### dequeue
Removes an item from the bottom of the queue and returns it.
```javascript
const queue = new Queue(['a','b','c']);
queue.dequeue(); // Queue: ['b','c'] | Returns 'a'
```

#### peek
Returns an item from the bottom of the queue.
```javascript
const queue = new Queue(['a','b','c']);
queue.peek(); // Queue: ['a','b','c'] | Returns 'a'
```

#### count
Returns the length of the queue.
```javascript
const queue = new Queue(['a','b','c']);
queue.count(); // Queue: ['a','b','c'] | Returns 3
```

## MinHeap
To create a new MinHeap use the following syntax.
```javascript
const minHeap = new MinHeap();
```

### Methods
#### push
Pushes an item to the top of the MinHeap and sorts it.
```javascript
const minHeap = new MinHeap();
minHeap.push(1); // MinHeap: [1]
```

#### pop
Removes the smallest item from the top of the MinHeap and sorts it.
```javascript
const minHeap = new MinHeap();
minHeap.push(5);
minHeap.push(3);
minHeap.push(2);
minHeap.pop(); // MinHeap: [3, 5]
```

## Running the tests
```
npm install
npm run test
```