const { assert } = require('chai');
const MinHeap = require('../MinHeap');

describe('MinHeap', () => {
  it('should return empty Heap when no arguments', () => {
    const minHeap = new MinHeap();
    assert.equal(minHeap.count(), 0);
  });

  it('should return length of the Heap on count', () => {
    const minHeap = new MinHeap();
    minHeap.push(1);
    minHeap.push(2);
    minHeap.push(1);
    assert.equal(minHeap.count(), 3);
  });

  it('should push new element to the heap', () => {
    const minHeap = new MinHeap();
    minHeap.push(1);
    assert.deepEqual(minHeap.toArray(), [1]);
  });

  it('should sort heap correctly on push', () => {
    const minHeap = new MinHeap();
    minHeap.push(1);
    minHeap.push(2);
    minHeap.push(7);
    minHeap.push(4);
    minHeap.push(10);
    minHeap.push(3);
    assert.deepEqual(minHeap.toArray(), [1, 2, 3, 4, 10, 7]);
  });

  it('should remove top element on pop and sort heap correctly', () => {
    const minHeap = new MinHeap();
    minHeap.push(1);
    minHeap.push(2);
    minHeap.push(7);
    minHeap.push(4);
    minHeap.push(10);
    minHeap.push(3);
    minHeap.pop();
    assert.deepEqual(minHeap.toArray(), [2, 4, 3, 7, 10]);
  });

  it('should throw error when calling pop on empty heap', () => {
    const minHeap = new MinHeap();
    assert.throws(minHeap.pop, Error);
  });

  it('should throw error when calling push with NaN argument', () => {
    const minHeap = new MinHeap();
    assert.throws(() => minHeap.push('a'), Error);
  });

  it('should throw error when calling push without argument', () => {
    const minHeap = new MinHeap();
    assert.throws(minHeap.push, Error);
  });
});
