class MaxHeap {
  constructor() {
    this.items = [];
  }

  push(item) {
    if (isNaN(item)) {
      throw Error('Item is not a number');
    } else {
      this.items.push(item);
      console.log(`Before: ${this.items}`);
      this.bubbleUp(this.count() - 1);
      console.log(`After: ${this.items}`);
    }
  }

  pop() {
    this.items[0] = this.items[this.count() - 1];
    this.items.pop();
    console.log(`Before sink: ${this.items}`);
    this.sinkDown(0);
    console.log(`After sink: ${this.items}`);
  }

  count() {
    return this.items.length;
  }

  bubbleUp(n) {
    if (n >= this.count()) {
      throw Error(`No element with index ${n}`);
    }

    const element = this.items[n];

    while (n > 0) {
      const parentN = Math.floor((n + 1) / 2) - 1;
      const parent = this.items[parentN];

      if (element <= parent) {
        break;
      }

      this.items[parentN] = element;
      this.items[n] = parent;
      n = parentN;
    }
  }

  sinkDown(n) {
    const element = this.items[n];
    let sorted = false;

    while (!sorted) {
      const child1N = ((n + 1) * 2) - 1;
      const child2N = ((n + 1) * 2);
      if (element < this.items[child1N]) {
        this.items[n] = this.items[child1N];
        this.items[child1N] = element;
        n = child1N;
      } else if (element < this.items[child2N]) {
        this.items[n] = this.items[child2N];
        this.items[child2N] = element;
        n = child2N;
      } else {
        sorted = true;
      }
    }
  }
}

module.exports = MaxHeap;
