class Stack {
  constructor(items) {
    this.items = items || [];
  }

  push(item) {
    this.items.push(item);
    console.log(this.items);
  }

  pop() {
    if (this.items.count() === 0) {
      throw new Error('The stack is empty');
    } else {
      const res = this.items[this.items.length - 1];
      this.items = this.items.slice(0, -1);
      console.log(this.items);
      return res;
    }
  }

  peek() {
    if (this.items.count() === 0) {
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
