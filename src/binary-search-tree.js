const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    this.base = addDate(this.base, data);

    function addDate(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addDate(node.left, data);
      }
      else {
        node.right = addDate(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasDate(this.base, data)
    function hasDate(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ?
        hasDate(node.left, data) :
        hasDate(node.right, data);
    }
  }

  find(data) {
    return findDate(this.base, data)
    function findDate(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data ?
        findDate(node.left, data) :
        findDate(node.right, data);
    }
  }

  remove(data) {
    this.base = removeData(this.base, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {//попали в узел с искомым значением
        if (!node.left && !node.right) {//листок конечный
          node === null;
        }
        if (!node.left) {//отходит только одна правая ветка
          node = node.right;
          return node;
        }
        if (!node.right) {//отходит только одна левая ветка
          node = node.left;
          return node;
        }
        //от искомого узла отходят 2 ветки
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data;
        node.right = removeData(node.right, minFromRight.data);
        return node
      }
    }
  }

  min() {
    if (!this.base) {
      return null
    }
    let node = this.base;
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.base) {
      return null
    }
    let node = this.base;
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};