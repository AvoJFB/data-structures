class Stack {
  constructor(items) {
    this.items = items || [];
  }

  push(item) {
    if (item) {
      this.items.push(item);
    } else {
      throw Error('No item provided');
    }
  }

  pop() {
    if (this.count() === 0) {
      throw new Error('The stack is empty');
    } else {
      const res = this.items[this.items.length - 1];
      this.items = this.items.slice(0, -1);
      return res;
    }
  }

  peek() {
    if (this.count() === 0) {
      throw new Error('The stack is empty');
    } else {
      return this.items[this.items.length - 1];
    }
  }

  count() {
    return this.items.length;
  }
}

module.exports = Stack;
