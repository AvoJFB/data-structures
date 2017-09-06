const { assert } = require('chai');
const Queue = require('../Queue');

describe('Queue', () => {
  it('should return empty queue when no arguments', () => {
    const queue = new Queue();
    assert.equal(queue.count(), 0);
  });

  it('should return length of the queue on count', () => {
    const queue = new Queue(['a', 'g', 'w', 'f']);
    assert.equal(queue.count(), 4);
  });

  it('should return first element on peek', () => {
    const queue = new Queue(['a', 'b', 'c', 'd']);
    assert.equal(queue.peek(), 'a');
  });

  it('should push item to empty queue', () => {
    const queue = new Queue();
    queue.enqueue('a');
    assert.equal(queue.peek(), 'a');
  });

  it('should return first element on dequeue', () => {
    const queue = new Queue(['a', 'b', 'c']);
    assert.equal(queue.dequeue(), 'a');
  });

  it('should remove first element on dequeue', () => {
    const queue = new Queue(['a', 'b', 'c']);
    queue.dequeue();
    assert.equal(queue.peek(), 'b');
  });

  it('should throw error when calling dequeue on empty queue', () => {
    const queue = new Queue();
    assert.throws(queue.dequeue, Error);
  });

  it('should throw error when calling peek on empty queue', () => {
    const queue = new Queue();
    assert.throws(queue.peek, Error);
  });

  it('should throw error when calling enqueue without argument', () => {
    const queue = new Queue();
    assert.throws(queue.enqueue, Error);
  });
});
