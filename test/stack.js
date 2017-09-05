const { assert } = require('chai');
const Stack = require('../Stack');

describe('Stack', () => {
  it('should return empty stack when no arguments', () => {
    const stack = new Stack();
    assert.equal(stack.count(), 0);
  });

  it('should return length of the stack on count', () => {
    const stack = new Stack(['a', 'g', 'w', 'f']);
    assert.equal(stack.count(), 4);
  });

  it('should return last element on peek', () => {
    const stack = new Stack(['a', 'b', 'c', 'd']);
    assert.equal(stack.pop(), 'd');
  });

  it('should push item to empty stack', () => {
    const stack = new Stack();
    stack.push('a');
    assert.equal(stack.peek(), 'a');
  });

  it('should return last element on pop', () => {
    const stack = new Stack(['a', 'b', 'c']);
    assert.equal(stack.pop(), 'c');
  });

  it('should remove last element on pop', () => {
    const stack = new Stack(['a', 'b', 'c']);
    stack.pop();
    assert.equal(stack.peek(), 'b');
  });
});
