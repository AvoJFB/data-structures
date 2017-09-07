const { assert } = require('chai');
const MaxHeap = require('../MaxHeap');

describe('MaxHeap', () => {
  it('should return empty Heap when no arguments', () => {
    const maxHeap = new MaxHeap();
    assert.equal(maxHeap.count(), 0);
  });

  it('should return length of the Heap on count', () => {
    const maxHeap = new MaxHeap();
    maxHeap.push(1);
    maxHeap.push(2);
    maxHeap.push(1);
    assert.equal(maxHeap.count(), 3);
  });

  it('should push new element to the heap', () => {
    const maxHeap = new MaxHeap();
    maxHeap.push(1);
    assert.deepEqual(maxHeap.toArray(), [1]);
  });

  it('should sort heap correctly on push', () => {
    const maxHeap = new MaxHeap();
    maxHeap.push(1);
    maxHeap.push(2);
    maxHeap.push(7);
    maxHeap.push(4);
    maxHeap.push(10);
    maxHeap.push(3);
    assert.deepEqual(maxHeap.toArray(), [10, 7, 3, 1, 4, 2]);
  });

  it('should remove top element on pop and sort heap correctly', () => {
    const maxHeap = new MaxHeap();
    maxHeap.push(1);
    maxHeap.push(2);
    maxHeap.push(7);
    maxHeap.push(4);
    maxHeap.push(10);
    maxHeap.push(3);
    maxHeap.pop();
    assert.deepEqual(maxHeap.toArray(), [7, 4, 3, 1, 2]);
  });

  it('should throw error when calling pop on empty heap', () => {
    const maxHeap = new MaxHeap();
    assert.throws(maxHeap.pop, Error);
  });

  it('should throw error when calling push with NaN argument', () => {
    const maxHeap = new MaxHeap();
    assert.throws(() => maxHeap.push('a'), Error);
  });

  it('should throw error when calling push without argument', () => {
    const maxHeap = new MaxHeap();
    assert.throws(maxHeap.push, Error);
  });
});
