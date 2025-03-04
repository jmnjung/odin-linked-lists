/**
 * A node in a singly linked list.
 */
export default class Node {
  /**
   * @param {*} value The value contained by this node.
   * @param {Node|null} nextNode The next node in the linked list.
   */
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
