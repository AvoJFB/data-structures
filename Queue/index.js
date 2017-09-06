class Queue {
  constructor(items) {
    this.items = items || [];
  }

  enqueue(item) {
    if (item) {
      this.items.push(item);
    } else {
      throw Error('No item provided');
    }
  }

  dequeue() {
    if (this.count() === 0) {
      throw Error('The Queue is empty');
    } else {
      const res = this.items[0];
      this.items = this.items.slice(1);
      return res;
    }
  }

  peek() {
    if (this.count() === 0) {
      throw Error('The Queue is empty');
    } else {
      return this.items[0];
    }
  }

  count() {
    return this.items.length;
  }
}

module.exports = Queue;
