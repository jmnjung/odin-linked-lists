import Node from "./node.js";

/**
 * A singly linked list to contain data of any type.
 */
export default class LinkedList {
  constructor() {
    this._head = null;
  }

  /**
   * Appends a new node with the value to this linked list.
   * @param {*} value
   */
  append(value) {
    if (this._head === null) {
      this.prepend(value);
    } else {
      this.tail.nextNode = new Node(value);
    }
  }

  /**
   * Prepends a new node with the value to this linked list.
   * @param {*} value
   */
  prepend(value) {
    this._head = new Node(value, this._head);
  }

  /**
   * Gets the number of elements in this linked list.
   * @returns {number}
   */
  get size() {
    let currNode = this._head;
    let size = 0;

    while (currNode !== null) {
      currNode = currNode.nextNode;
      size++;
    }

    return size;
  }

  /**
   * Gets the first node in this linked list.
   * @returns {Node|null}
   */
  get head() {
    return this._head;
  }

  /**
   * Sets the first node in this linked list.
   * @param {Node|null} node
   */
  set head(node) {
    this._head = node;
  }

  /**
   * Gets the last node in this linked list.
   * @returns {Node|null}
   */
  get tail() {
    let currNode = this._head;

    while (currNode !== null && currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }

    return currNode;
  }

  /**
   * Gets the node at the index in this linked list.
   * @param {number} index
   * @returns {Node}
   */
  at(index) {
    if (!Number.isInteger(index) || index < 0) {
      throw new Error("index must be a non-negative integer");
    }

    if (index >= this.size) {
      throw new Error("index is out of bounds");
    }

    let currNode = this._head;
    let i = 0;

    while (currNode !== null) {
      if (i === index) {
        return currNode;
      }
      currNode = currNode.nextNode;
      i++;
    }
  }

  /**
   * Pops the last node in this linked list.
   */
  pop() {
    if (this._head === null) {
      throw new Error("cannot pop from an empty list");
    }

    if (this.size === 1) {
      this._head = null;
      return;
    }

    const tailNode = this.tail;
    let currNode = this._head;

    while (currNode !== null) {
      if (currNode.nextNode === tailNode) {
        currNode.nextNode = null;
      }
      currNode = currNode.nextNode;
    }
  }

  /**
   * Checks whether if this linked list contains the value.
   * @param {*} value
   * @returns {boolean}
   */
  contains(value) {
    let currNode = this._head;

    while (currNode !== null) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.nextNode;
    }

    return false;
  }

  /**
   * Checks for the index of a node in this linked list with the value.
   * @param {*} value
   * @returns {number|null}
   */
  find(value) {
    let currNode = this._head;
    let index = 0;

    while (currNode !== null) {
      if (currNode.value === value) {
        return index;
      }
      currNode = currNode.nextNode;
      index++;
    }

    return null;
  }

  /**
   * Inserts a new node to this linked list before the node at the index.
   * @param {*} value
   * @param {number} index
   */
  insertAt(value, index) {
    if (!Number.isInteger(index) || index < 0) {
      throw new Error("index must be a non-negative integer");
    }

    if (index > this.size) {
      throw new Error("index is out of bounds");
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size) {
      this.append(value);
      return;
    }

    const currNode = this.at(index - 1);
    currNode.nextNode = new Node(value, currNode.nextNode);
  }

  /**
   * Removes the node from this linked list at the index.
   * @param {number} index
   */
  removeAt(index) {
    if (!Number.isInteger(index) || index < 0) {
      throw new Error("index must be a non-negative integer");
    }

    if (index >= this.size) {
      throw new Error("index is out of bounds");
    }

    if (index === 0) {
      this._head = this._head.nextNode;
      return;
    }

    const currNode = this.at(index - 1);
    currNode.nextNode = currNode.nextNode.nextNode;
  }

  /**
   * Gets a string representation of this linked list.
   * @returns {string}
   */
  toString() {
    let currNode = this._head;
    let string = "";

    while (currNode !== null) {
      string += `( ${currNode.value} ) -> `;
      currNode = currNode.nextNode;
    }

    string += "null";

    return string;
  }
}
