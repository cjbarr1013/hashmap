import { Node } from './Node.js';

export function LinkedList() {
  let headNode = new Node();

  function append(key, value) {
    // adds a new node containing key and value to the end of the list
    let current = headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = new Node(key, value);
  }

  function prepend(key, value) {
    // adds a new node containing key and value to the start of the list
    let newNode = new Node(key, value, headNode.nextNode);
    headNode.nextNode = newNode;
  }

  function size() {
    // returns the total number of nodes in the list
    let current = headNode;
    let total = 0;
    while (current.nextNode !== null) {
      total += 1;
      current = current.nextNode;
    }
    return total;
  }

  function head() {
    // returns the first node in the list
    return headNode.nextNode;
  }

  function tail() {
    // returns the last node in the list
    let current = headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  function at(index) {
    // returns the node at the given index
    let tempIndex = 0;
    let current = headNode.nextNode;
    while (tempIndex < index && current !== null) {
      current = current.nextNode;
      tempIndex++;
    }
    return current;
  }

  function pop() {
    // removes the last element from the list
    let prev;
    let current = headNode;
    while (current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }

    if (current !== headNode) {
      prev.nextNode = null;
    }
  }

  function containsKey(key) {
    // returns true if the passed in key is in the list and otherwise returns false.
    let current = headNode;
    while (current.nextNode !== null) {
      if (current.nextNode.key === key) return true;
      current = current.nextNode;
    }
    return false;
  }

  function containsValue(value) {
    // returns true if the passed in value is in the list and otherwise returns false.
    let current = headNode;
    while (current.nextNode !== null) {
      if (current.nextNode.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  function findKey(key) {
    // returns the index of the node containing value, or null if not found.
    let tempIndex = 0;
    let current = headNode.nextNode;
    while (current !== null) {
      if (current.key === key) return tempIndex;
      current = current.nextNode;
      tempIndex++;
    }
    return null;
  }

  function findValue(value) {
    // returns the index of the node containing value, or null if not found.
    let tempIndex = 0;
    let current = headNode.nextNode;
    while (current !== null) {
      if (current.value === value) return tempIndex;
      current = current.nextNode;
      tempIndex++;
    }
    return null;
  }

  function toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let current = headNode;
    let output = '';
    while (current.nextNode !== null) {
      output += `( ${current.nextNode.value} ) -> `;
      current = current.nextNode;
    }

    output += 'null';
    return output;
  }

  function insertAt(key, value, index) {
    // inserts a new node with the provided value at the given index
    let tempIndex = 0;
    let prev = headNode;
    let current = headNode.nextNode;
    while (tempIndex < index && current !== null) {
      prev = current;
      current = current.nextNode;
      tempIndex++;
    }

    let newNode = new Node(key, value, current);
    prev.nextNode = newNode;
  }

  function removeAt(index) {
    // removes the node at the given index
    let tempIndex = 0;
    let prev = headNode;
    let current = headNode.nextNode;
    while (tempIndex < index && current !== null) {
      prev = current;
      current = current.nextNode;
      tempIndex++;
    }

    try {
      prev.nextNode = current.nextNode;
    } catch (e) {
      if (e instanceof TypeError) {
        return;
      }
    }
  }

  function changeValue(key, value) {
    // changes the value of a node with the provided key
    let current = headNode.nextNode;
    while (current !== null) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      current = current.nextNode;
    }
  }

  function getValue(key) {
    // returns value of the given key, if it exists
    let current = headNode.nextNode;
    while (current !== null) {
      if (current.key === key) return current.value;
      current = current.nextNode;
    }
    return null;
  }

  function getAllKeys() {
    // return an array of all keys in the linked list
    let keyArray = [];
    let current = headNode.nextNode;
    while (current !== null) {
      keyArray.push(current.key);
      current = current.nextNode;
    }
    return keyArray;
  }

  function getAllValues() {
    // return an array of all keys in the linked list
    let valueArray = [];
    let current = headNode.nextNode;
    while (current !== null) {
      valueArray.push(current.value);
      current = current.nextNode;
    }
    return valueArray;
  }

  function getKeyValuePairs() {
    // return an array with arrays containing the key value pairs for each node
    let pairs = [];
    let current = headNode.nextNode;
    while (current !== null) {
      pairs.push([current.key, current.value]);
      current = current.nextNode;
    }
    return pairs;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    containsKey,
    containsValue,
    findKey,
    findValue,
    toString,
    insertAt,
    removeAt,
    changeValue,
    getValue,
    getAllKeys,
    getAllValues,
    getKeyValuePairs,
  };
}
