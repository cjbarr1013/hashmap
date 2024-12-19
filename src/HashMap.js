import { LinkedList } from './LinkedList.js';

export function HashMap() {
  let capacity = 16;
  let buckets = new Array(capacity).fill(null);
  const loadFactor = 0.75;

  function checkCapacity() {
    // comparies number of entries with product of capacity and load factor.
    // capacity is increased if # of entires exceeds this number
    if (length() > capacity * loadFactor) increaseCapacity();
  }

  function increaseCapacity() {
    // increases the capacity of the hashmap and redistributes entries
    capacity *= 2;

    let entriesCopy = entries();
    buckets = new Array(capacity).fill(null);
    entriesCopy.forEach((entry) => {
      set(entry[0], entry[1]);
    });
  }

  function hash(key) {
    // takes a key and produces a hash code with it
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  function set(key, value) {
    // takes two arguments: the first is a key, and the second is a value that is assigned to this key.
    // If a key already exists, then the old value is overwritten, and we can say that we update the key’s value
    const hashedValue = hash(key);

    if (buckets[hashedValue] === null) {
      buckets[hashedValue] = new LinkedList();
      buckets[hashedValue].append(key, value);
    } else {
      if (buckets[hashedValue].containsKey(key)) {
        buckets[hashedValue].changeValue(key, value);
      } else {
        buckets[hashedValue].append(key, value);
      }
    }

    checkCapacity();
  }

  function get(key) {
    // takes one argument as a key and returns the value that is assigned to this key.
    // If a key is not found, return null.
    for (const bucket of buckets) {
      if (bucket !== null) {
        const value = bucket.getValue(key);
        if (value !== null) return value;
      }
    }
    return null;
  }

  function has(key) {
    // takes a key as an argument and returns true or false
    // based on whether or not the key is in the hash map
    for (const bucket of buckets) {
      if (bucket !== null) {
        if (bucket.containsKey(key)) return true;
      }
    }
    return false;
  }

  function remove(key) {
    // takes a key as an argument. If the given key is in the hash map,
    // it should remove the entry with that key and return true.
    // If the key isn’t in the hash map, it should return false
    for (let bucket of buckets) {
      if (bucket !== null) {
        const index = bucket.findKey(key);
        if (index !== null) {
          bucket.removeAt(index);
          if (bucket.size() === 0) bucket = null;
          return true;
        }
      }
    }
    return false;
  }

  function length() {
    // returns the number of stored keys in the hash map
    let total = 0;
    buckets.forEach((bucket) => {
      if (bucket !== null) {
        total += bucket.size();
      }
    });
    return total;
  }

  function clear() {
    // removes all entries in the hash map
    capacity = 16;
    buckets = new Array(capacity).fill(null);
  }

  function keys() {
    // returns an array containing all the keys inside the hash map
    let keyArray = [];
    for (const bucket of buckets) {
      if (bucket !== null) {
        keyArray = keyArray.concat(bucket.getAllKeys());
      }
    }
    return keyArray;
  }

  function values() {
    // returns an array containing all the values
    let valueArray = [];
    for (const bucket of buckets) {
      if (bucket !== null) {
        valueArray = valueArray.concat(bucket.getAllValues());
      }
    }
    return valueArray;
  }

  function entries() {
    // returns an array that contains each key, value pair
    // Example: [[firstKey, firstValue], [secondKey, secondValue]]
    let entryArray = [];
    for (const bucket of buckets) {
      if (bucket !== null) {
        entryArray = entryArray.concat(bucket.getKeyValuePairs());
      }
    }
    return entryArray;
  }

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}
