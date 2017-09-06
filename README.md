# Data Structures

## Stack
To create a new empty stack use the following syntax.
```
const stack = new Stack()
```

To create a new stack with initial value use the following syntax.
```
const stack = new Stack(['a', 'b', 'c', 'd'])
```
Note that argument for creating a stack with initial value can be only array where the first item is the bottom of the stack and the last item is the top of the stack.

### Methods
#### push
Pushes an item to the top of the stack.
```
const stack = new Stack(['a','b']);
stack.push('c'); || Stack: ['a','b','c']
```

#### pop
Removes an item from the top of the stack and returns it.
```
const stack = new Stack(['a','b','c']);
stack.pop(); || Stack: ['a','b'] || Returns 'c'
```

#### peek
Returns an item from the top of the stack.
```
const stack = new Stack(['a','b','c']);
stack.peek(); || Stack: ['a','b','c'] || Returns 'c'
```

#### count
Returns the length of the stack.
```
const stack = new Stack(['a','b','c']);
stack.count(); || Stack: ['a','b','c'] || Returns 3
```

## Queue
To create a new empty queue use the following syntax.
```
const queue = new Queue()
```

To create a new queue with initial value use the following syntax.
```
const queue = new Queue(['a', 'b', 'c', 'd'])
```
Note that argument for creating a queue with initial value can be only array where the first item is the bottom of the queue and the last item is the top of the queue.

### Methods
#### enqueue
Pushes an item to the top of the queue.
```
const queue = new Queue(['a','b']);
stack.enqueue('c'); || Queue: ['a','b','c']
```

#### dequeue
Removes an item from the bottom of the queue and returns it.
```
const queue = new Queue(['a','b','c']);
queue.dequeue(); || Queue: ['b','c'] || Returns 'a'
```

#### peek
Returns an item from the bottom of the queue.
```
const queue = new Queue(['a','b','c']);
queue.peek(); || Queue: ['a','b','c'] || Returns 'a'
```

#### count
Returns the length of the queue.
```
const queue = new Queue(['a','b','c']);
queue.count(); || Queue: ['a','b','c'] || Returns 3
```

## Running the tests
```
npm install
npm run test
```