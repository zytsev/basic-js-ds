const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
*
* stack.push(1); // adds the element to the stack
* stack.peek(); // returns the peek, but doesn't delete it, returns 1
* stack.pop(); // returns the top element from stack and deletes it, returns 1
* stack.pop(); // undefined
*
*/
class Stack {
  constructor() {
    this.size = null;
    this.date = {};
  }
  push(element) {
    let size = ++this.size;
    this.date[size] = element;
  }

  pop() {
    let size = this.size;
    let deletedData = this.date[size];
    delete this.date[size];
    this.size--;
    return deletedData;
  }

  peek() {
    let size = this.size;
    return this.date[size];
  }
}


module.exports = {
  Stack
};
