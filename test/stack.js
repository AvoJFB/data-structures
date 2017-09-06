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
    assert.equal(stack.peek(), 'd');
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

  it('should throw error when calling pop on empty stack', () => {
    const stack = new Stack();
    assert.throws(stack.pop, Error);
  });

  it('should throw error when calling peek on empty stack', () => {
    const stack = new Stack();
    assert.throws(stack.peek, Error);
  });

  it('should throw error when calling push without argument', () => {
    const stack = new Stack();
    assert.throws(stack.push, Error);
  });
});
