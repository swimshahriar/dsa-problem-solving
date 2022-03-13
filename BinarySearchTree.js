class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    }

    const searchTree = (node) => {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return;
        } else if (node.left !== null) {
          return searchTree(node.left);
        }
      } else if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
          return;
        } else if (node.right !== null) {
          return searchTree(node.right);
        }
      } else {
        return null;
      }
    };
    return searchTree(node);
  }

  findMin() {
    let curr = this.root;

    while (curr.left !== null) curr = curr.left;
    return curr.data;
  }

  findMax() {
    let curr = this.root;

    while (curr.right !== null) curr = curr.right;
    return curr.data;
  }

  find(data) {
    let curr = this.root;

    while (curr.data !== data) {
      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }

      if (curr === null) return null;
    }

    return curr;
  }

  isPresent(data) {
    let curr = this.root;

    while (curr) {
      if (data === curr.data) return true;

      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) return null;

      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) return null;

        // node has no left child
        if (node.left === null) return node.right;

        // node has no right child
        if (node.right === null) return node.left;

        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(7);
bst.add(1);
bst.add(7);
bst.add(3);
bst.add(10);
console.log(`Max: ${bst.findMax()}`);
console.log(`Min: ${bst.findMin()}`);
console.log(`Find: ${JSON.stringify(bst.find(1))}`);
console.log(`IsPresent: ${bst.isPresent(12)}`);
bst.remove(3);
console.log(`Tree: ${JSON.stringify(bst)}`);
